import sequelize from './config/db';
import { 
  FamilyLocation, 
  FamilyActiveMission, 
  FamilyStoryAdventure, 
  FamilyStoryNode, 
  FamilyStoryChoice, 
  FamilyAchievement 
} from './models';

async function seedFamilyExpansion() {
  console.log('🏰 Sincronizando novas tabelas e dados da Expansão da Família Lira...');

  try {
    await sequelize.authenticate();
    console.log('✅ Conexão com o banco de dados OK.');

    // Sincronização aditiva e segura das novas tabelas
    await FamilyLocation.sync({ alter: false });
    await FamilyActiveMission.sync({ alter: false });
    await FamilyStoryAdventure.sync({ alter: false });
    await FamilyStoryNode.sync({ alter: false });
    await FamilyStoryChoice.sync({ alter: false });
    await FamilyAchievement.sync({ alter: false });
    console.log('✅ Novas tabelas da Família sincronizadas com sucesso.');

    // 1. Locais do Radar (Casa e Vizinhança)
    const locCount = await FamilyLocation.count();
    if (locCount === 0) {
      console.log('🌱 Criando Locais do Radar da Família Lira...');
      await FamilyLocation.bulkCreate([
        {
          id: 'loc_cozinha',
          name: 'Cozinha dos Banquetes',
          category: 'HOUSE',
          description: 'O epicentro das poções e refeições. Lave a louça e ajude a preparar o jantar para ganhar ouro!',
          icon: '🍳',
          bgImageUrl: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&auto=format&fit=crop&q=60',
          orderIndex: 1,
          isUnlocked: true,
        },
        {
          id: 'loc_quarto_estudos',
          name: 'Quarto dos Estudos & Brinquedos',
          category: 'HOUSE',
          description: 'Santuário do saber e da diversão. Faça a lição de casa e mantenha seus itens organizados!',
          icon: '🧸',
          bgImageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&auto=format&fit=crop&q=60',
          orderIndex: 2,
          isUnlocked: true,
        },
        {
          id: 'loc_quintal',
          name: 'Quintal dos Desafios',
          category: 'HOUSE',
          description: 'Área aberta de treinamento físico. Cuide das plantas e recolha o que estiver fora do lugar.',
          icon: '🌳',
          bgImageUrl: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&auto=format&fit=crop&q=60',
          orderIndex: 3,
          isUnlocked: true,
        },
        {
          id: 'loc_padaria',
          name: 'Padaria do Bairro',
          category: 'NEIGHBORHOOD',
          description: 'Expedição externa ao reino mortal. Vá buscar pão fresco e traga suprimentos para a família.',
          icon: '🥖',
          bgImageUrl: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&auto=format&fit=crop&q=60',
          orderIndex: 4,
          isUnlocked: true,
        },
        {
          id: 'loc_escola',
          name: 'Academia do Conhecimento (Escola)',
          category: 'NEIGHBORHOOD',
          description: 'O grande centro de aprendizado. Estude com dedicação e mostre suas boas notas para o clã!',
          icon: '🎒',
          bgImageUrl: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&auto=format&fit=crop&q=60',
          orderIndex: 5,
          isUnlocked: true,
        },
      ]);
    }

    // 2. Conquistas & Medalhas da Família
    const achCount = await FamilyAchievement.count();
    if (achCount === 0) {
      console.log('🌱 Criando Conquistas e Medalhas da Família Lira...');
      await FamilyAchievement.bulkCreate([
        {
          title: 'Mestre da Cozinha',
          description: 'Conclua 5 missões de louça ou organização na cozinha.',
          icon: '🍳',
          category: 'CHORE',
          rewardXp: 100,
          rewardGold: 30,
          requiredCount: 5,
        },
        {
          title: 'Sábio dos Livros',
          description: 'Conclua 5 tarefas de lição de casa ou leitura.',
          icon: '📚',
          category: 'STUDY',
          rewardXp: 120,
          rewardGold: 40,
          requiredCount: 5,
        },
        {
          title: 'Guardião da Ordem',
          description: 'Mantenha sua cama e quarto arrumados por 7 dias.',
          icon: '🛏️',
          category: 'HABIT',
          rewardXp: 150,
          rewardGold: 50,
          requiredCount: 7,
        },
        {
          title: 'Terror dos Chefes',
          description: 'Participe da derrota do Golem da Bagunça na Arena de Batalha.',
          icon: '⚔️',
          category: 'BATTLE',
          rewardXp: 200,
          rewardGold: 60,
          requiredCount: 1,
        },
      ]);
    }

    // 3. Livro-Jogo Solo: "O Mistério da Chave Dourada Perdida"
    const advCount = await FamilyStoryAdventure.count();
    if (advCount === 0) {
      console.log('🌱 Criando 1º Livro-Jogo Solo da Família Lira...');
      const adv = await FamilyStoryAdventure.create({
        id: 'adv_chave_dourada',
        title: 'O Mistério da Chave Dourada Perdida',
        summary: 'Uma chave mágica e brilhante sumiu de cima da cômoda! Reúna pistas pela casa, teste sua inteligência e descubra onde ela foi parar antes do almoço!',
        coverImageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&auto=format&fit=crop&q=60',
        initialNodeId: 'node_intro',
        recommendedLevel: 1,
        rewardXp: 90,
        rewardGold: 30,
        isActive: true,
      });

      // Nó 1: Introdução
      const node1 = await FamilyStoryNode.create({
        adventureId: adv.id,
        nodeId: 'node_intro',
        title: 'O Desaparecimento da Chave',
        narration: 'A manhã começou ensolarada, mas algo estranho aconteceu: a Chave Dourada que abre o baú de jogos da família desapareceu! Você encontra marcas misteriosas de patinhas perto do sofá...',
        speakerName: 'Narrador da Família',
        speakerAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500',
        bgImageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800',
        isEnding: false,
      });

      // Escolhas Nó 1
      await FamilyStoryChoice.bulkCreate([
        {
          nodeRecordId: node1.id,
          text: '🐾 Seguir as pegadas de patas em direção ao Quintal.',
          targetNodeId: 'node_quintal',
          testAttribute: 'AGILITY',
          difficulty: 10,
          successNodeId: 'node_quintal_sucesso',
          failureNodeId: 'node_quintal_falha',
          orderIndex: 1,
        },
        {
          nodeRecordId: node1.id,
          text: '🔍 Procurar com atenção embaixo das almofadas da Sala.',
          targetNodeId: 'node_sala',
          testAttribute: 'WISDOM',
          difficulty: 10,
          successNodeId: 'node_sala_sucesso',
          failureNodeId: 'node_sala_falha',
          orderIndex: 2,
        },
      ]);

      // Nó 2: Sucesso no Quintal (Final Vitória)
      await FamilyStoryNode.create({
        adventureId: adv.id,
        nodeId: 'node_quintal_sucesso',
        title: 'O Mascote Travesso!',
        narration: 'Você correu rápido pelo quintal e flagrou o mascote da família brincando com a chave perto do gramado! Com carinho, você recuperou o tesouro e salvou o dia de toda a família!',
        speakerName: 'Pai & Mãe',
        speakerAvatar: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=500',
        bgImageUrl: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800',
        isEnding: true,
        endingType: 'VICTORY',
        rewardXp: 90,
        rewardGold: 30,
      });

      // Nó 3: Sucesso na Sala (Final Vitória)
      await FamilyStoryNode.create({
        adventureId: adv.id,
        nodeId: 'node_sala_sucesso',
        title: 'Dedução Brilhante!',
        narration: 'Sua sabedoria não falhou! Entre as almofadas do sofá, a chave reluzia em meio ao tecido. Você ergueu a chave como um verdadeiro herói detetive!',
        speakerName: 'Irmãos Lira',
        speakerAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500',
        bgImageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800',
        isEnding: true,
        endingType: 'VICTORY',
        rewardXp: 90,
        rewardGold: 30,
      });
    }

    // Correção de Avatars de /uploads/family/ para /uploads/characters/
    const { FamilyCharacter } = await import('./models');
    const { Op } = await import('sequelize');
    const charsToFix = await FamilyCharacter.findAll({
      where: {
        avatarUrl: {
          [Op.like]: '%/uploads/family/%'
        }
      }
    });
    for (const c of charsToFix) {
      c.avatarUrl = c.avatarUrl.replace('/uploads/family/', '/uploads/characters/');
      await c.save();
      console.log(`Corrigido avatar de ${c.name}: ${c.avatarUrl}`);
    }

    console.log('🎉 Expansão da Família Lira concluída com sucesso!');
  } catch (error) {
    console.error('❌ Erro no seed da Expansão da Família:', error);
  }
}

seedFamilyExpansion().then(() => {
  process.exit(0);
});
