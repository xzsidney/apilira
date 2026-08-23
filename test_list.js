const { DefinitionMissionIdle, DefinitionMissionIdleAction } = require('./dist/models');
async function run() {
  try {
    const missions = await DefinitionMissionIdle.findAll({
      include: [
        {
          model: DefinitionMissionIdleAction,
          as: 'Actions',
          attributes: ['id', 'stepOrder', 'name', 'difficulty', 'attributeReq', 'skillReq', 'description']
        }
      ]
    });
    console.log(missions.map(m => m.id));
  } catch(e) {
    console.error(e.message);
  }
  process.exit();
}
run();
