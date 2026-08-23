const { Sequelize } = require('sequelize');
const { DefinitionMissionIdle, CharacterActiveMission, CharacterVampire, DefinitionMissionIdleAction } = require('./dist/models');
async function run() {
  try {
    const activeMission = await CharacterActiveMission.findOne({
      where: { characterId: '32ae8889-3dcb-4107-8d16-c3cc4e04da8a', status: 'IN_PROGRESS' },
      include: [{ model: DefinitionMissionIdle, as: 'DefinitionMissionIdle' }]
    });
    
    const now = new Date();
    const startedAt = new Date(activeMission.startedAt);
    let fullReport = JSON.parse(activeMission.reportJson);
    const responseMission = activeMission.toJSON();

    const isExpired = now >= new Date(activeMission.expiresAt);
    
    const revealedSteps = fullReport.steps.filter((step, index) => {
      if (isExpired) return true;
      const stepTime = new Date(startedAt);
      stepTime.setMinutes(stepTime.getMinutes() + ((index + 1) * activeMission.stepDurationMinutes));
      return now >= stepTime;
    });

    responseMission.currentReport = {
      title: fullReport.title,
      steps: revealedSteps,
      isSuccess: isExpired ? fullReport.isSuccess : null,
      finalChanges: isExpired ? fullReport.finalChanges : []
    };
    
    const elapsedMinutes = (now.getTime() - startedAt.getTime()) / (1000 * 60);
    let currentStage = Math.floor(elapsedMinutes / activeMission.stepDurationMinutes);
    if (currentStage < 0) currentStage = 0;
    if (currentStage > fullReport.steps.length) currentStage = fullReport.steps.length;
    
    responseMission.currentStage = currentStage;
    responseMission.totalStages = fullReport.steps.length;
    if (isExpired) responseMission.readyToResolve = true;

    console.log(responseMission);
  } catch(e) {
    console.error(e.message);
  }
  process.exit();
}
run();
