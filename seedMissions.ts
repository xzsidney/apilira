import sequelize from './src/config/db';
import { DefinitionMissionIdle } from './src/models';

async function seedMissions() {
  try {
    console.log('Sincronizando novas tabelas...');
    await sequelize.sync({ alter: true });
    console.log('Sincronização concluída.');

    console.log('Semeando missões...');

    let cacadaMission = await DefinitionMissionIdle.findOne({ where: { title: 'Caçada pelas Ruas' } });

    if (!cacadaMission) {
      cacadaMission = await DefinitionMissionIdle.create({
        title: 'Caçada pelas Ruas',
        description: 'Vagar pelos becos escuros em busca de recipientes adequados. Um teste de predador para aliviar a Besta.',
        durationMinutes: 10,
        baseDifficulty: 4,
        allowedRequirements: {
          attributes: ['Físico', 'Social', 'Mental'],
          skills: ['Briga', 'Lábia', 'Furtividade', 'Sobrevivência', 'Prontidão']
        },
        rewardsJson: {
          fome_mod: -2,
          xp: 5
        },
        penaltiesJson: {
          fome_mod: 1,
          humanidade_mod: 0
        }
      });
      console.log('Missão "Caçada pelas Ruas" criada com sucesso!');
    } else {
      console.log('Missão "Caçada pelas Ruas" já existe.');
    }

    // Criando as etapas da missão
    const DefinitionMissionIdleAction = require('./src/models').DefinitionMissionIdleAction;
    const actionsCount = await DefinitionMissionIdleAction.count({ where: { missionId: cacadaMission.id } });
    
    if (actionsCount === 0) {
      await DefinitionMissionIdleAction.bulkCreate([
        {
          missionId: cacadaMission.id,
          stepOrder: 1,
          name: 'Procurar',
          description: 'Nesta ação você está procurando uma vítima nas ruas.',
          difficulty: 6,
          attributeReq: 'Raciocínio',
          skillReq: 'Percepção',
          successText: 'Você encontrou uma presa vulnerável e a seguiu pelas sombras.',
          failureText: 'A vítima percebeu que estava sendo seguida e correu para um local movimentado. A caçada falhou.'
        },
        {
          missionId: cacadaMission.id,
          stepOrder: 2,
          name: 'Avançar',
          description: 'Você vai em direção à vítima furtivamente.',
          difficulty: 6,
          attributeReq: 'Destreza',
          skillReq: 'Furtividade',
          successText: 'Você se aproximou sem fazer nenhum barulho, isolando o alvo no beco.',
          failureText: 'Você pisou em vidro quebrado. A vítima gritou por socorro e um policial apareceu.'
        },
        {
          missionId: cacadaMission.id,
          stepOrder: 3,
          name: 'Morder',
          description: 'Você coloca suas presas na vítima para se alimentar.',
          difficulty: 6,
          attributeReq: 'Força',
          skillReq: 'Briga',
          successText: 'O beijo anestesiou a vítima. O sangue jorrou doce e quente, saciando sua Besta.',
          failureText: 'A vítima reagiu e sacou uma faca, ferindo você. Você perdeu sangue na fuga.'
        }
      ]);
      console.log('Ações (Etapas) da Caçada criadas com sucesso!');
    } else {
      console.log('Ações da Caçada já existem.');
    }

    console.log('Processo finalizado.');
    process.exit(0);
  } catch (error) {
    console.error('Erro ao sincronizar/semear:', error);
    process.exit(1);
  }
}

seedMissions();
