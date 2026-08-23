const { Sequelize } = require('sequelize');
const { DefinitionMissionIdle, CharacterActiveMission, CharacterVampire, DefinitionMissionIdleAction } = require('./dist/models');

async function run() {
  try {
    const activeMission = await CharacterActiveMission.findOne({
      where: {
        characterId: '32aa8889-3dcb-4107-8d16-c3cc4a04da8a',
        status: 'IN_PROGRESS'
      },
      include: [
        { model: DefinitionMissionIdle, as: 'DefinitionMissionIdle' }
      ]
    });
    console.log(activeMission);
  } catch(e) {
    console.error(e.message);
  }
  process.exit();
}
run();
