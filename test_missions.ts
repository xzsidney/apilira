import { DefinitionMissionIdle, DefinitionMissionIdleAction } from './src/models';

async function test() {
  try {
    const missions = await DefinitionMissionIdle.findAll({
      include: [
        {
          model: DefinitionMissionIdleAction,
          as: 'Actions',
          attributes: ['id', 'stepOrder', 'name', 'difficulty', 'attributeReq', 'skillReq']
        }
      ]
    });
    console.log(JSON.stringify(missions, null, 2));
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

test();
