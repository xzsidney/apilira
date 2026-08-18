import sequelize from './src/config/db';
import { DefinitionMissionIdle } from './src/models';

async function seedMissions() {
  try {
    console.log('Sincronizando novas tabelas...');
    await sequelize.sync({ alter: true });
    console.log('Sincronização concluída.');

    console.log('Semeando missões...');

    const cacadaMission = await DefinitionMissionIdle.findOne({ where: { title: 'Caçada pelas Ruas' } });

    if (!cacadaMission) {
      await DefinitionMissionIdle.create({
        title: 'Caçada pelas Ruas',
        description: 'Vagar pelos becos escuros em busca de recipientes adequados. Um teste de predador para aliviar a Besta.',
        durationMinutes: 10, // 10 minutes for testing purposes
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
          fome_mod: 1, // It went wrong, used vitae and got nothing
          humanidade_mod: 0
        }
      });
      console.log('Missão "Caçada pelas Ruas" criada com sucesso!');
    } else {
      console.log('Missão "Caçada pelas Ruas" já existe.');
    }

    console.log('Processo finalizado.');
    process.exit(0);
  } catch (error) {
    console.error('Erro ao sincronizar/semear:', error);
    process.exit(1);
  }
}

seedMissions();
