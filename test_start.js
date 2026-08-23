const { Sequelize } = require('sequelize');
const { DefinitionMissionIdle, CharacterActiveMission, CharacterVampire, DefinitionMissionIdleAction } = require('./dist/models');

async function run() {
  try {
    const characterId = '32aa8889-3dcb-4107-8d16-c3cc4a04da8a';
    const missionDef = await DefinitionMissionIdle.findOne();
    if(!missionDef) return console.log("No mission");
    console.log("Starting mission:", missionDef.id);
    
    // mimic startMission
    const character = await CharacterVampire.findByPk(characterId, {
      include: [
        { model: require('./dist/models').CharacterVampireAttribute, include: [{ model: require('./dist/models').DefinitionAttribute }] },
        { model: require('./dist/models').CharacterVampireSkill, include: [{ model: require('./dist/models').DefinitionSkill }] }
      ]
    });
    console.log("Found char?", !!character);

    const expiresAt = new Date();
    expiresAt.setMinutes(expiresAt.getMinutes() + 10);

    const newActiveMission = await CharacterActiveMission.create({
      characterId,
      definitionMissionIdleId: missionDef.id,
      startedAt: new Date(),
      expiresAt,
      status: 'IN_PROGRESS',
      stepDurationMinutes: 5,
      reportJson: JSON.stringify({ title: "Test" })
    });
    console.log(newActiveMission.toJSON());
    
    // Cleanup
    await newActiveMission.destroy();
  } catch(e) {
    console.error(e.message);
  }
  process.exit();
}
run();
