import { PrismaClient } from '@prisma/client';
import * as fs from 'fs';
import * as path from 'path';

const prisma = new PrismaClient();

async function main() {
  console.log('Iniciando o Seed de Aventuras (Acervo M:N)...');

  const jsonPath = path.resolve(__dirname, '../../doc/aventura01.json');
  if (!fs.existsSync(jsonPath)) {
    throw new Error(`Arquivo não encontrado: ${jsonPath}`);
  }

  const rawData = fs.readFileSync(jsonPath, 'utf8');
  const jsonData = JSON.parse(rawData);

  const advData = jsonData.aventura;

  // 1. Criar ou Atualizar a Aventura
  const adventure = await prisma.adventure.create({
    data: {
      name: advData.nome,
      gameStyle: advData.tipo,
      objective: advData.objetivo,
    },
  });

  console.log(`✔ Aventura criada: ${adventure.name}`);

  // 2. Primeiro Passo: Cadastrar as Cenas (Para termos os IDs)
  // Como as Cenas podem ter Destinos para outras Cenas, precisamos inserir todas primeiro.
  const scenesMap = new Map();

  for (const cena of advData.cenas) {
    const newScene = await prisma.scene.upsert({
      where: { sceneIdentifier: cena.id },
      update: {
        title: cena.titulo,
        description: cena.descricao,
        apiConsequences: cena.consequencias_api || null,
      },
      create: {
        sceneIdentifier: cena.id,
        title: cena.titulo,
        description: cena.descricao,
        apiConsequences: cena.consequencias_api || null,
      },
    });

    scenesMap.set(cena.id, newScene.id);

    // Ligar Cena à Aventura
    await prisma.adventureScene.upsert({
      where: {
        adventureId_sceneId: {
          adventureId: adventure.id,
          sceneId: newScene.id,
        }
      },
      update: {},
      create: {
        adventureId: adventure.id,
        sceneId: newScene.id,
      },
    });
  }

  console.log(`✔ Cadastradas ${scenesMap.size} Cenas no Acervo.`);

  // 3. Segundo Passo: Cadastrar Ações e Ligá-las às Cenas com Destinos
  let actionsCount = 0;
  for (const cena of advData.cenas) {
    const currentSceneId = scenesMap.get(cena.id);

    if (cena.acoes && cena.acoes.length > 0) {
      let order = 0;
      for (const acao of cena.acoes) {
        // Criar ou Atualizar a Ação Genérica no Acervo
        const newAction = await prisma.action.upsert({
          where: { actionIdentifier: acao.id },
          update: {
            focus: acao.foco,
            text: acao.texto,
            testStr: acao.teste,
            difficulty: acao.dificuldade_sucessos,
          },
          create: {
            actionIdentifier: acao.id,
            focus: acao.foco,
            text: acao.texto,
            testStr: acao.teste,
            difficulty: acao.dificuldade_sucessos,
          },
        });

        actionsCount++;

        // Descobrir os IDs reais (UUIDs) dos destinos
        const successId = acao.destino_sucesso ? scenesMap.get(acao.destino_sucesso) : null;
        const failureId = acao.destino_falha ? scenesMap.get(acao.destino_falha) : null;

        // Ligar a Ação à Cena atual, injetando os Destinos na Tabela M:N
        await prisma.sceneAction.upsert({
          where: {
            sceneId_actionId: {
              sceneId: currentSceneId,
              actionId: newAction.id,
            }
          },
          update: {
            successSceneId: successId,
            failureSceneId: failureId,
            order: order,
          },
          create: {
            sceneId: currentSceneId,
            actionId: newAction.id,
            successSceneId: successId,
            failureSceneId: failureId,
            order: order,
          },
        });
        order++;
      }
    }
  }

  console.log(`✔ Cadastradas e vinculadas ${actionsCount} Ações no Acervo.`);
  console.log('Seed de Aventura M:N concluído com sucesso!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
