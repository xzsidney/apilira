import fs from 'fs';
import path from 'path';
import { 
  DefinitionStoryAdventure, 
  DefinitionStoryNode, 
  DefinitionStoryChoice 
} from './models';
import sequelize from './config/database';

export interface StoryChoiceJson {
  choiceText: string;
  attributeReq?: string;
  skillReq?: string;
  difficulty?: number;
  successNodeKey: string;
  failureNodeKey?: string;
  customStyle?: string;
}

export interface StoryNodeJson {
  key: string;
  narrativeText: string;
  speakerName?: string;
  isEnding?: boolean;
  backgroundImageUrl?: string;
  leftCharacterImageUrl?: string;
  rightCharacterImageUrl?: string;
  choices?: StoryChoiceJson[];
}

export interface StoryAdventureJson {
  title: string;
  description: string;
  maxCompletions?: number | null;
  firstNodeKey: string;
  nodes: StoryNodeJson[];
}

export async function importAdventureFromJson(filePath: string) {
  const absolutePath = path.resolve(filePath);
  if (!fs.existsSync(absolutePath)) {
    console.error(`Arquivo não encontrado: ${absolutePath}`);
    return;
  }

  const rawData = fs.readFileSync(absolutePath, 'utf-8');
  const adventureData: StoryAdventureJson = JSON.parse(rawData);

  console.log(`\n🦇 Iniciando importação da Crônica: "${adventureData.title}"...`);

  // 1. Criar ou buscar Aventura
  let adventure = await DefinitionStoryAdventure.findOne({
    where: { title: adventureData.title }
  });

  if (!adventure) {
    adventure = await DefinitionStoryAdventure.create({
      title: adventureData.title,
      description: adventureData.description,
      maxCompletions: adventureData.maxCompletions ?? null,
    } as any);
    console.log(`✨ Aventura criada: "${adventure.title}" (ID: ${adventure.id})`);
  } else {
    adventure.description = adventureData.description;
    adventure.maxCompletions = adventureData.maxCompletions ?? null;
    await adventure.save();
    console.log(`🔄 Aventura existente atualizada: "${adventure.title}"`);
  }

  // 2. Mapeamento de Nós por chave (ex: "node_1" -> Node Instance)
  const nodeMap = new Map<string, DefinitionStoryNode>();

  // Limpar nós antigos se a aventura já existia para recriar a estrutura limpa
  const existingNodes = await DefinitionStoryNode.findAll({ where: { adventureId: adventure.id } });
  for (const node of existingNodes) {
    await DefinitionStoryChoice.destroy({ where: { nodeId: node.id } });
    await node.destroy();
  }

  // 3. Criar os Nós no banco
  for (const n of adventureData.nodes) {
    const node = await DefinitionStoryNode.create({
      adventureId: adventure.id,
      narrativeText: n.narrativeText,
      speakerName: n.speakerName || 'O Narrador',
      isEnding: !!n.isEnding,
      backgroundImageUrl: n.backgroundImageUrl || '',
      leftCharacterImageUrl: n.leftCharacterImageUrl || '',
      rightCharacterImageUrl: n.rightCharacterImageUrl || '',
    } as any);

    nodeMap.set(n.key, node);
    console.log(`  ├─ Cena criada: [${n.key}] ${n.speakerName ? `(${n.speakerName})` : ''} - "${n.narrativeText.slice(0, 45)}..."`);
  }

  // 4. Vincular o Nó Inicial da Aventura
  const firstNode = nodeMap.get(adventureData.firstNodeKey);
  if (firstNode) {
    adventure.firstNodeId = firstNode.id;
    await adventure.save();
    console.log(`  ├─ Nó Inicial vinculado com sucesso: [${adventureData.firstNodeKey}]`);
  } else {
    console.warn(`  ⚠️ Nó inicial "${adventureData.firstNodeKey}" não encontrado nos nós fornecidos.`);
  }

  // 5. Criar Escolhas e conectar as ramificações
  let totalChoices = 0;
  for (const n of adventureData.nodes) {
    const parentNode = nodeMap.get(n.key);
    if (!parentNode || !n.choices) continue;

    for (const c of n.choices) {
      const targetSuccess = nodeMap.get(c.successNodeKey);
      const targetFailure = c.failureNodeKey ? nodeMap.get(c.failureNodeKey) : null;

      if (!targetSuccess) {
        console.warn(`    ⚠️ Escolha "${c.choiceText}" aponta para nó de sucesso inexistente: "${c.successNodeKey}"`);
        continue;
      }

      await DefinitionStoryChoice.create({
        nodeId: parentNode.id,
        choiceText: c.choiceText,
        attributeReq: c.attributeReq || null,
        skillReq: c.skillReq || null,
        difficulty: c.difficulty || 1,
        successNodeId: targetSuccess.id,
        failureNodeId: targetFailure ? targetFailure.id : targetSuccess.id,
        customStyle: c.customStyle || null
      } as any);

      totalChoices++;
    }
  }

  console.log(`  └─ Total de ${totalChoices} escolhas/testes vinculados.`);
  console.log(`✅ Crônica "${adventureData.title}" importada e pronta para jogar!\n`);
}

// Execução direta via CLI
if (require.main === module) {
  const targetFile = process.argv[2] || path.join(__dirname, 'data/adventures/o_leilao_de_sangue.json');
  importAdventureFromJson(targetFile)
    .then(() => process.exit(0))
    .catch((err) => {
      console.error('Erro na importação da crônica:', err);
      process.exit(1);
    });
}

