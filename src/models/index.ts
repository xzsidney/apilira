import sequelize from '../config/db';
import { initUser, User } from './User';
import { initDefinitionAttribute, DefinitionAttribute } from './DefinitionAttribute';
import { initDefinitionSkill, DefinitionSkill } from './DefinitionSkill';
import { initDefinitionArchetype, DefinitionArchetype } from './DefinitionArchetype';
import { initDefinitionMeritFlaw, DefinitionMeritFlaw } from './DefinitionMeritFlaw';
import { initDefinitionEquipment, DefinitionEquipment } from './DefinitionEquipment';
import { initDefinitionBackground, DefinitionBackground } from './DefinitionBackground';
import { initDefinitionClan, DefinitionClan } from './DefinitionClan';
import { initDefinitionPredator, DefinitionPredator } from './DefinitionPredator';
import { initDefinitionResonance, DefinitionResonance } from './DefinitionResonance';
import { initDefinitionDiscipline, DefinitionDiscipline } from './DefinitionDiscipline';
import { initDefinitionDisciplinePower, DefinitionDisciplinePower } from './DefinitionDisciplinePower';
import { initDefinitionBloodPotency, DefinitionBloodPotency } from './DefinitionBloodPotency';
import { initCharacterVampire, CharacterVampire } from './CharacterVampire';
import { initCharacterVampireAttribute, CharacterVampireAttribute } from './CharacterVampireAttribute';
import { initCharacterVampireSkill, CharacterVampireSkill } from './CharacterVampireSkill';
import { initCharacterVampireDiscipline, CharacterVampireDiscipline } from './CharacterVampireDiscipline';
import { initCharacterVampirePower, CharacterVampirePower } from './CharacterVampirePower';
import { initCharacterVampireMeritFlaw, CharacterVampireMeritFlaw } from './CharacterVampireMeritFlaw';
import { initCharacterVampireBackground, CharacterVampireBackground } from './CharacterVampireBackground';
import { initCharacterVampireEquipment, CharacterVampireEquipment } from './CharacterVampireEquipment';
import { initCreationPackage, CreationPackage } from './CreationPackage';
import { initCreationPackageItem, CreationPackageItem } from './CreationPackageItem';
import { initDefinitionLocation, DefinitionLocation } from './DefinitionLocation';
import CharacterKnownLocation from './CharacterKnownLocation';
import CharacterHaven from './CharacterHaven';
import DefinitionMissionIdle from './DefinitionMissionIdle';
import CharacterActiveMission from './CharacterActiveMission';
import { DefinitionMissionIdleAction, initDefinitionMissionIdleAction } from './DefinitionMissionIdleAction';
import DefinitionStoryAdventure from './DefinitionStoryAdventure';
import DefinitionStoryNode from './DefinitionStoryNode';
import DefinitionStoryChoice from './DefinitionStoryChoice';
import CharacterStoryProgress from './CharacterStoryProgress';
import CharacterActivityLog from './CharacterActivityLog';
import { initFamilyCharacter, FamilyCharacter } from './FamilyCharacter';
import { initFamilyTask, FamilyTask } from './FamilyTask';
import { initFamilyTaskLog, FamilyTaskLog } from './FamilyTaskLog';
import { initFamilyBattle, FamilyBattle } from './FamilyBattle';
import { initFamilyBattleParticipant, FamilyBattleParticipant } from './FamilyBattleParticipant';
import { initFamilyShopItem, FamilyShopItem } from './FamilyShopItem';

// Initialize models
initUser(sequelize);
initDefinitionAttribute(sequelize);
initDefinitionSkill(sequelize);
initDefinitionArchetype(sequelize);
initDefinitionMeritFlaw(sequelize);
initDefinitionEquipment(sequelize);
initDefinitionBackground(sequelize);
initDefinitionClan(sequelize);
initDefinitionPredator(sequelize);
initDefinitionResonance(sequelize);
initDefinitionDiscipline(sequelize);
initDefinitionDisciplinePower(sequelize);
initDefinitionBloodPotency(sequelize);
initCharacterVampire(sequelize);
initCharacterVampireAttribute(sequelize);
initCharacterVampireSkill(sequelize);
initCharacterVampireDiscipline(sequelize);
initCharacterVampirePower(sequelize);
initCharacterVampireMeritFlaw(sequelize);
initCharacterVampireBackground(sequelize);
initCharacterVampireEquipment(sequelize);
initCreationPackage(sequelize);
initCreationPackageItem(sequelize);
initDefinitionLocation(sequelize);
initDefinitionMissionIdleAction(sequelize);
initFamilyCharacter(sequelize);
initFamilyTask(sequelize);
initFamilyTaskLog(sequelize);
initFamilyBattle(sequelize);
initFamilyBattleParticipant(sequelize);
initFamilyShopItem(sequelize);

// Existing associations
DefinitionLocation.hasMany(DefinitionLocation, { as: 'children', foreignKey: 'parentId' });
DefinitionLocation.belongsTo(DefinitionLocation, { as: 'parent', foreignKey: 'parentId' });

// Associations
DefinitionDiscipline.hasMany(DefinitionDisciplinePower, { foreignKey: 'definitionDisciplineId' });
DefinitionDisciplinePower.belongsTo(DefinitionDiscipline, { foreignKey: 'definitionDisciplineId' });

// --- Creation Packages Associations ---
CreationPackage.hasMany(CreationPackageItem, { foreignKey: 'packageId' });
CreationPackageItem.belongsTo(CreationPackage, { foreignKey: 'packageId' });

// --- CharacterVampire Associations ---
User.hasMany(CharacterVampire, { foreignKey: 'userId' });
CharacterVampire.belongsTo(User, { foreignKey: 'userId' });

DefinitionClan.hasMany(CharacterVampire, { foreignKey: 'clanId' });
CharacterVampire.belongsTo(DefinitionClan, { foreignKey: 'clanId' });

DefinitionPredator.hasMany(CharacterVampire, { foreignKey: 'predatorId' });
CharacterVampire.belongsTo(DefinitionPredator, { foreignKey: 'predatorId' });

DefinitionResonance.hasMany(CharacterVampire, { foreignKey: 'resonanceId' });
CharacterVampire.belongsTo(DefinitionResonance, { foreignKey: 'resonanceId' });

DefinitionBloodPotency.hasMany(CharacterVampire, { foreignKey: 'bloodPotencyId' });
CharacterVampire.belongsTo(DefinitionBloodPotency, { foreignKey: 'bloodPotencyId' });

// Associative Tables
CharacterVampire.hasMany(CharacterVampireAttribute, { foreignKey: 'characterVampireId' });
CharacterVampireAttribute.belongsTo(CharacterVampire, { foreignKey: 'characterVampireId' });
CharacterVampireAttribute.belongsTo(DefinitionAttribute, { foreignKey: 'definitionAttributeId' });

CharacterVampire.hasMany(CharacterVampireSkill, { foreignKey: 'characterVampireId' });
CharacterVampireSkill.belongsTo(CharacterVampire, { foreignKey: 'characterVampireId' });
CharacterVampireSkill.belongsTo(DefinitionSkill, { foreignKey: 'definitionSkillId' });

CharacterVampire.hasMany(CharacterVampireDiscipline, { foreignKey: 'characterVampireId' });
CharacterVampireDiscipline.belongsTo(CharacterVampire, { foreignKey: 'characterVampireId' });
CharacterVampireDiscipline.belongsTo(DefinitionDiscipline, { foreignKey: 'definitionDisciplineId' });

CharacterVampire.hasMany(CharacterVampirePower, { foreignKey: 'characterVampireId' });
CharacterVampirePower.belongsTo(CharacterVampire, { foreignKey: 'characterVampireId' });
CharacterVampirePower.belongsTo(DefinitionDisciplinePower, { foreignKey: 'definitionDisciplinePowerId' });

CharacterVampire.hasMany(CharacterVampireMeritFlaw, { foreignKey: 'characterVampireId' });
CharacterVampireMeritFlaw.belongsTo(CharacterVampire, { foreignKey: 'characterVampireId' });
CharacterVampireMeritFlaw.belongsTo(DefinitionMeritFlaw, { foreignKey: 'definitionMeritFlawId' });

CharacterVampire.hasMany(CharacterVampireBackground, { foreignKey: 'characterVampireId' });
CharacterVampireBackground.belongsTo(CharacterVampire, { foreignKey: 'characterVampireId' });
CharacterVampireBackground.belongsTo(DefinitionBackground, { foreignKey: 'definitionBackgroundId' });

CharacterVampire.hasMany(CharacterVampireEquipment, { foreignKey: 'characterVampireId' });
CharacterVampireEquipment.belongsTo(CharacterVampire, { foreignKey: 'characterVampireId' });
CharacterVampireEquipment.belongsTo(DefinitionEquipment, { foreignKey: 'definitionEquipmentId' });

// --- New Modules Associations ---
CharacterVampire.hasMany(CharacterKnownLocation, { foreignKey: 'characterId' });
CharacterKnownLocation.belongsTo(CharacterVampire, { foreignKey: 'characterId' });
DefinitionLocation.hasMany(CharacterKnownLocation, { foreignKey: 'locationId' });
CharacterKnownLocation.belongsTo(DefinitionLocation, { foreignKey: 'locationId' });

CharacterVampire.hasOne(CharacterHaven, { as: 'Haven', foreignKey: 'characterId' });
CharacterHaven.belongsTo(CharacterVampire, { foreignKey: 'characterId' });
DefinitionLocation.hasMany(CharacterHaven, { foreignKey: 'locationId' });
CharacterHaven.belongsTo(DefinitionLocation, { foreignKey: 'locationId' });

CharacterVampire.hasMany(CharacterActiveMission, { foreignKey: 'characterId' });
CharacterActiveMission.belongsTo(CharacterVampire, { foreignKey: 'characterId' });
DefinitionMissionIdle.hasMany(CharacterActiveMission, { foreignKey: 'definitionMissionIdleId' });
CharacterActiveMission.belongsTo(DefinitionMissionIdle, { foreignKey: 'definitionMissionIdleId' });


DefinitionMissionIdle.hasMany(DefinitionMissionIdleAction, { as: 'Actions', foreignKey: 'missionId' });
DefinitionMissionIdleAction.belongsTo(DefinitionMissionIdle, { foreignKey: 'missionId' });

DefinitionLocation.hasMany(DefinitionMissionIdle, { as: 'missions', foreignKey: 'locationId' });
DefinitionMissionIdle.belongsTo(DefinitionLocation, { foreignKey: 'locationId' });

// --- Story Adventure Associations ---
DefinitionStoryAdventure.hasMany(DefinitionStoryNode, { as: 'nodes', foreignKey: 'adventureId' });
DefinitionStoryNode.belongsTo(DefinitionStoryAdventure, { foreignKey: 'adventureId' });

DefinitionStoryNode.hasMany(DefinitionStoryChoice, { as: 'choices', foreignKey: 'nodeId' });
DefinitionStoryChoice.belongsTo(DefinitionStoryNode, { foreignKey: 'nodeId' });

CharacterVampire.hasMany(CharacterStoryProgress, { foreignKey: 'characterId' });
CharacterStoryProgress.belongsTo(CharacterVampire, { foreignKey: 'characterId' });

DefinitionStoryAdventure.hasMany(CharacterStoryProgress, { foreignKey: 'adventureId' });
CharacterStoryProgress.belongsTo(DefinitionStoryAdventure, { foreignKey: 'adventureId' });

DefinitionStoryNode.hasMany(CharacterStoryProgress, { foreignKey: 'currentNodeId' });
CharacterStoryProgress.belongsTo(DefinitionStoryNode, { foreignKey: 'currentNodeId' });

CharacterVampire.hasMany(CharacterActivityLog, { as: 'activityLogs', foreignKey: 'characterId' });
CharacterActivityLog.belongsTo(CharacterVampire, { as: 'character', foreignKey: 'characterId' });

// --- Family System Associations ---
User.hasOne(FamilyCharacter, { as: 'familyCharacter', foreignKey: 'userId' });
FamilyCharacter.belongsTo(User, { as: 'user', foreignKey: 'userId' });

FamilyCharacter.hasMany(FamilyTaskLog, { as: 'taskLogs', foreignKey: 'characterId' });
FamilyTaskLog.belongsTo(FamilyCharacter, { as: 'character', foreignKey: 'characterId' });

FamilyTask.hasMany(FamilyTaskLog, { as: 'logs', foreignKey: 'taskId' });
FamilyTaskLog.belongsTo(FamilyTask, { as: 'task', foreignKey: 'taskId' });

FamilyBattle.hasMany(FamilyBattleParticipant, { as: 'participants', foreignKey: 'battleId' });
FamilyBattleParticipant.belongsTo(FamilyBattle, { as: 'battle', foreignKey: 'battleId' });

FamilyCharacter.hasMany(FamilyBattleParticipant, { as: 'battles', foreignKey: 'characterId' });
FamilyBattleParticipant.belongsTo(FamilyCharacter, { as: 'character', foreignKey: 'characterId' });

// Export
export { 
  sequelize, 
  User, 
  DefinitionAttribute, 
  DefinitionSkill, 
  DefinitionArchetype, 
  DefinitionMeritFlaw,
  DefinitionEquipment,
  DefinitionBackground,
  DefinitionClan,
  DefinitionPredator,
  DefinitionResonance,
  DefinitionDiscipline,
  DefinitionDisciplinePower,
  DefinitionBloodPotency,
  CharacterVampire,
  CharacterVampireAttribute,
  CharacterVampireSkill,
  CharacterVampireDiscipline,
  CharacterVampirePower,
  CharacterVampireMeritFlaw,
  CharacterVampireBackground,
  CharacterVampireEquipment,
  CreationPackage,
  CreationPackageItem,
  DefinitionLocation,
  CharacterKnownLocation,
  CharacterHaven,
  DefinitionMissionIdle,
  CharacterActiveMission,
  DefinitionMissionIdleAction,
  DefinitionStoryAdventure,
  DefinitionStoryNode,
  DefinitionStoryChoice,
  CharacterStoryProgress,
  CharacterActivityLog,
  FamilyCharacter,
  FamilyTask,
  FamilyTaskLog,
  FamilyBattle,
  FamilyBattleParticipant,
  FamilyShopItem
};

