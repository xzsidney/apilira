"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SceneAction = exports.AdventureScene = exports.Action = exports.Scene = exports.Adventure = exports.RegionWealth = exports.RegionPublicSecurity = exports.RegionMediaVisibility = exports.RegionCriminality = exports.RegionDemographic = exports.Wealth = exports.PublicSecurity = exports.MediaVisibility = exports.Criminality = exports.DemographicProfile = exports.Region = exports.CharacterHaven = exports.HavenDefinition = exports.CharacterBackground = exports.BackgroundDefinition = exports.CharacterItem = exports.ItemDefinition = exports.CharacterMeritFlaw = exports.MeritFlawDefinition = exports.CharacterPowerSelection = exports.CharacterPower = exports.PowerLevelDefinition = exports.PowerDefinition = exports.CharacterStatus = exports.StatusDefinition = exports.CharacterSkill = exports.SkillDefinition = exports.CharacterAttribute = exports.AttributeDefinition = exports.Character = exports.User = exports.sequelize = void 0;
/**
 * Arquivo central de modelos Sequelize.
 * Importa, inicializa e define todas as associações entre os modelos.
 */
const database_1 = __importDefault(require("../config/database"));
exports.sequelize = database_1.default;
// ==================== Importação dos modelos ====================
const User_1 = require("./User");
Object.defineProperty(exports, "User", { enumerable: true, get: function () { return User_1.User; } });
const Character_1 = require("./Character");
Object.defineProperty(exports, "Character", { enumerable: true, get: function () { return Character_1.Character; } });
const AttributeDefinition_1 = require("./AttributeDefinition");
Object.defineProperty(exports, "AttributeDefinition", { enumerable: true, get: function () { return AttributeDefinition_1.AttributeDefinition; } });
const CharacterAttribute_1 = require("./CharacterAttribute");
Object.defineProperty(exports, "CharacterAttribute", { enumerable: true, get: function () { return CharacterAttribute_1.CharacterAttribute; } });
const SkillDefinition_1 = require("./SkillDefinition");
Object.defineProperty(exports, "SkillDefinition", { enumerable: true, get: function () { return SkillDefinition_1.SkillDefinition; } });
const CharacterSkill_1 = require("./CharacterSkill");
Object.defineProperty(exports, "CharacterSkill", { enumerable: true, get: function () { return CharacterSkill_1.CharacterSkill; } });
const StatusDefinition_1 = require("./StatusDefinition");
Object.defineProperty(exports, "StatusDefinition", { enumerable: true, get: function () { return StatusDefinition_1.StatusDefinition; } });
const CharacterStatus_1 = require("./CharacterStatus");
Object.defineProperty(exports, "CharacterStatus", { enumerable: true, get: function () { return CharacterStatus_1.CharacterStatus; } });
const PowerDefinition_1 = require("./PowerDefinition");
Object.defineProperty(exports, "PowerDefinition", { enumerable: true, get: function () { return PowerDefinition_1.PowerDefinition; } });
const PowerLevelDefinition_1 = require("./PowerLevelDefinition");
Object.defineProperty(exports, "PowerLevelDefinition", { enumerable: true, get: function () { return PowerLevelDefinition_1.PowerLevelDefinition; } });
const CharacterPower_1 = require("./CharacterPower");
Object.defineProperty(exports, "CharacterPower", { enumerable: true, get: function () { return CharacterPower_1.CharacterPower; } });
const CharacterPowerSelection_1 = require("./CharacterPowerSelection");
Object.defineProperty(exports, "CharacterPowerSelection", { enumerable: true, get: function () { return CharacterPowerSelection_1.CharacterPowerSelection; } });
const MeritFlawDefinition_1 = require("./MeritFlawDefinition");
Object.defineProperty(exports, "MeritFlawDefinition", { enumerable: true, get: function () { return MeritFlawDefinition_1.MeritFlawDefinition; } });
const CharacterMeritFlaw_1 = require("./CharacterMeritFlaw");
Object.defineProperty(exports, "CharacterMeritFlaw", { enumerable: true, get: function () { return CharacterMeritFlaw_1.CharacterMeritFlaw; } });
const ItemDefinition_1 = require("./ItemDefinition");
Object.defineProperty(exports, "ItemDefinition", { enumerable: true, get: function () { return ItemDefinition_1.ItemDefinition; } });
const CharacterItem_1 = require("./CharacterItem");
Object.defineProperty(exports, "CharacterItem", { enumerable: true, get: function () { return CharacterItem_1.CharacterItem; } });
const BackgroundDefinition_1 = require("./BackgroundDefinition");
Object.defineProperty(exports, "BackgroundDefinition", { enumerable: true, get: function () { return BackgroundDefinition_1.BackgroundDefinition; } });
const CharacterBackground_1 = require("./CharacterBackground");
Object.defineProperty(exports, "CharacterBackground", { enumerable: true, get: function () { return CharacterBackground_1.CharacterBackground; } });
const HavenDefinition_1 = require("./HavenDefinition");
Object.defineProperty(exports, "HavenDefinition", { enumerable: true, get: function () { return HavenDefinition_1.HavenDefinition; } });
const CharacterHaven_1 = require("./CharacterHaven");
Object.defineProperty(exports, "CharacterHaven", { enumerable: true, get: function () { return CharacterHaven_1.CharacterHaven; } });
const Region_1 = require("./Region");
Object.defineProperty(exports, "Region", { enumerable: true, get: function () { return Region_1.Region; } });
const DemographicProfile_1 = require("./DemographicProfile");
Object.defineProperty(exports, "DemographicProfile", { enumerable: true, get: function () { return DemographicProfile_1.DemographicProfile; } });
const Criminality_1 = require("./Criminality");
Object.defineProperty(exports, "Criminality", { enumerable: true, get: function () { return Criminality_1.Criminality; } });
const MediaVisibility_1 = require("./MediaVisibility");
Object.defineProperty(exports, "MediaVisibility", { enumerable: true, get: function () { return MediaVisibility_1.MediaVisibility; } });
const PublicSecurity_1 = require("./PublicSecurity");
Object.defineProperty(exports, "PublicSecurity", { enumerable: true, get: function () { return PublicSecurity_1.PublicSecurity; } });
const Wealth_1 = require("./Wealth");
Object.defineProperty(exports, "Wealth", { enumerable: true, get: function () { return Wealth_1.Wealth; } });
const RegionDemographic_1 = require("./RegionDemographic");
Object.defineProperty(exports, "RegionDemographic", { enumerable: true, get: function () { return RegionDemographic_1.RegionDemographic; } });
const RegionCriminality_1 = require("./RegionCriminality");
Object.defineProperty(exports, "RegionCriminality", { enumerable: true, get: function () { return RegionCriminality_1.RegionCriminality; } });
const RegionMediaVisibility_1 = require("./RegionMediaVisibility");
Object.defineProperty(exports, "RegionMediaVisibility", { enumerable: true, get: function () { return RegionMediaVisibility_1.RegionMediaVisibility; } });
const RegionPublicSecurity_1 = require("./RegionPublicSecurity");
Object.defineProperty(exports, "RegionPublicSecurity", { enumerable: true, get: function () { return RegionPublicSecurity_1.RegionPublicSecurity; } });
const RegionWealth_1 = require("./RegionWealth");
Object.defineProperty(exports, "RegionWealth", { enumerable: true, get: function () { return RegionWealth_1.RegionWealth; } });
const Adventure_1 = require("./Adventure");
Object.defineProperty(exports, "Adventure", { enumerable: true, get: function () { return Adventure_1.Adventure; } });
const Scene_1 = require("./Scene");
Object.defineProperty(exports, "Scene", { enumerable: true, get: function () { return Scene_1.Scene; } });
const Action_1 = require("./Action");
Object.defineProperty(exports, "Action", { enumerable: true, get: function () { return Action_1.Action; } });
const AdventureScene_1 = require("./AdventureScene");
Object.defineProperty(exports, "AdventureScene", { enumerable: true, get: function () { return AdventureScene_1.AdventureScene; } });
const SceneAction_1 = require("./SceneAction");
Object.defineProperty(exports, "SceneAction", { enumerable: true, get: function () { return SceneAction_1.SceneAction; } });
// ==================== Inicialização dos modelos ====================
(0, User_1.initUser)(database_1.default);
(0, Character_1.initCharacter)(database_1.default);
(0, AttributeDefinition_1.initAttributeDefinition)(database_1.default);
(0, CharacterAttribute_1.initCharacterAttribute)(database_1.default);
(0, SkillDefinition_1.initSkillDefinition)(database_1.default);
(0, CharacterSkill_1.initCharacterSkill)(database_1.default);
(0, StatusDefinition_1.initStatusDefinition)(database_1.default);
(0, CharacterStatus_1.initCharacterStatus)(database_1.default);
(0, PowerDefinition_1.initPowerDefinition)(database_1.default);
(0, PowerLevelDefinition_1.initPowerLevelDefinition)(database_1.default);
(0, CharacterPower_1.initCharacterPower)(database_1.default);
(0, CharacterPowerSelection_1.initCharacterPowerSelection)(database_1.default);
(0, MeritFlawDefinition_1.initMeritFlawDefinition)(database_1.default);
(0, CharacterMeritFlaw_1.initCharacterMeritFlaw)(database_1.default);
(0, ItemDefinition_1.initItemDefinition)(database_1.default);
(0, CharacterItem_1.initCharacterItem)(database_1.default);
(0, BackgroundDefinition_1.initBackgroundDefinition)(database_1.default);
(0, CharacterBackground_1.initCharacterBackground)(database_1.default);
(0, HavenDefinition_1.initHavenDefinition)(database_1.default);
(0, CharacterHaven_1.initCharacterHaven)(database_1.default);
(0, Region_1.initRegion)(database_1.default);
(0, DemographicProfile_1.initDemographicProfile)(database_1.default);
(0, Criminality_1.initCriminality)(database_1.default);
(0, MediaVisibility_1.initMediaVisibility)(database_1.default);
(0, PublicSecurity_1.initPublicSecurity)(database_1.default);
(0, Wealth_1.initWealth)(database_1.default);
(0, RegionDemographic_1.initRegionDemographic)(database_1.default);
(0, RegionCriminality_1.initRegionCriminality)(database_1.default);
(0, RegionMediaVisibility_1.initRegionMediaVisibility)(database_1.default);
(0, RegionPublicSecurity_1.initRegionPublicSecurity)(database_1.default);
(0, RegionWealth_1.initRegionWealth)(database_1.default);
(0, Adventure_1.initAdventure)(database_1.default);
(0, Scene_1.initScene)(database_1.default);
(0, Action_1.initAction)(database_1.default);
(0, AdventureScene_1.initAdventureScene)(database_1.default);
(0, SceneAction_1.initSceneAction)(database_1.default);
// ==================== Associações ====================
// --- User <-> Character ---
User_1.User.hasMany(Character_1.Character, { foreignKey: 'userId', as: 'characters', onDelete: 'CASCADE' });
Character_1.Character.belongsTo(User_1.User, { foreignKey: 'userId', as: 'user' });
// --- Character <-> CharacterAttribute ---
Character_1.Character.hasMany(CharacterAttribute_1.CharacterAttribute, { foreignKey: 'characterId', as: 'attributes', onDelete: 'CASCADE' });
CharacterAttribute_1.CharacterAttribute.belongsTo(Character_1.Character, { foreignKey: 'characterId', as: 'character' });
// --- AttributeDefinition <-> CharacterAttribute ---
AttributeDefinition_1.AttributeDefinition.hasMany(CharacterAttribute_1.CharacterAttribute, { foreignKey: 'attributeId', as: 'characterAttributes', onDelete: 'CASCADE' });
CharacterAttribute_1.CharacterAttribute.belongsTo(AttributeDefinition_1.AttributeDefinition, { foreignKey: 'attributeId', as: 'attributeDefinition' });
// --- Character <-> CharacterSkill ---
Character_1.Character.hasMany(CharacterSkill_1.CharacterSkill, { foreignKey: 'characterId', as: 'skills', onDelete: 'CASCADE' });
CharacterSkill_1.CharacterSkill.belongsTo(Character_1.Character, { foreignKey: 'characterId', as: 'character' });
// --- SkillDefinition <-> CharacterSkill ---
SkillDefinition_1.SkillDefinition.hasMany(CharacterSkill_1.CharacterSkill, { foreignKey: 'skillId', as: 'characterSkills', onDelete: 'CASCADE' });
CharacterSkill_1.CharacterSkill.belongsTo(SkillDefinition_1.SkillDefinition, { foreignKey: 'skillId', as: 'skillDefinition' });
// --- Character <-> CharacterStatus ---
Character_1.Character.hasMany(CharacterStatus_1.CharacterStatus, { foreignKey: 'characterId', as: 'statuses', onDelete: 'CASCADE' });
CharacterStatus_1.CharacterStatus.belongsTo(Character_1.Character, { foreignKey: 'characterId', as: 'character' });
// --- StatusDefinition <-> CharacterStatus ---
StatusDefinition_1.StatusDefinition.hasMany(CharacterStatus_1.CharacterStatus, { foreignKey: 'statusId', as: 'characterStatuses', onDelete: 'CASCADE' });
CharacterStatus_1.CharacterStatus.belongsTo(StatusDefinition_1.StatusDefinition, { foreignKey: 'statusId', as: 'statusDefinition' });
// --- PowerDefinition <-> PowerLevelDefinition ---
PowerDefinition_1.PowerDefinition.hasMany(PowerLevelDefinition_1.PowerLevelDefinition, { foreignKey: 'powerDefinitionId', as: 'levels', onDelete: 'CASCADE' });
PowerLevelDefinition_1.PowerLevelDefinition.belongsTo(PowerDefinition_1.PowerDefinition, { foreignKey: 'powerDefinitionId', as: 'powerDefinition' });
// --- Character <-> CharacterPower ---
Character_1.Character.hasMany(CharacterPower_1.CharacterPower, { foreignKey: 'characterId', as: 'powers', onDelete: 'CASCADE' });
CharacterPower_1.CharacterPower.belongsTo(Character_1.Character, { foreignKey: 'characterId', as: 'character' });
// --- PowerDefinition <-> CharacterPower ---
PowerDefinition_1.PowerDefinition.hasMany(CharacterPower_1.CharacterPower, { foreignKey: 'powerDefinitionId', as: 'characterPowers', onDelete: 'CASCADE' });
CharacterPower_1.CharacterPower.belongsTo(PowerDefinition_1.PowerDefinition, { foreignKey: 'powerDefinitionId', as: 'powerDefinition' });
// --- CharacterPower <-> CharacterPowerSelection ---
CharacterPower_1.CharacterPower.hasMany(CharacterPowerSelection_1.CharacterPowerSelection, { foreignKey: 'characterPowerId', as: 'selections', onDelete: 'CASCADE' });
CharacterPowerSelection_1.CharacterPowerSelection.belongsTo(CharacterPower_1.CharacterPower, { foreignKey: 'characterPowerId', as: 'characterPower' });
// --- PowerLevelDefinition <-> CharacterPowerSelection ---
PowerLevelDefinition_1.PowerLevelDefinition.hasMany(CharacterPowerSelection_1.CharacterPowerSelection, { foreignKey: 'powerLevelDefinitionId', as: 'characterSelections', onDelete: 'CASCADE' });
CharacterPowerSelection_1.CharacterPowerSelection.belongsTo(PowerLevelDefinition_1.PowerLevelDefinition, { foreignKey: 'powerLevelDefinitionId', as: 'powerLevelDefinition' });
// --- Character <-> CharacterMeritFlaw ---
Character_1.Character.hasMany(CharacterMeritFlaw_1.CharacterMeritFlaw, { foreignKey: 'characterId', as: 'meritsFlaws', onDelete: 'CASCADE' });
CharacterMeritFlaw_1.CharacterMeritFlaw.belongsTo(Character_1.Character, { foreignKey: 'characterId', as: 'character' });
// --- MeritFlawDefinition <-> CharacterMeritFlaw ---
MeritFlawDefinition_1.MeritFlawDefinition.hasMany(CharacterMeritFlaw_1.CharacterMeritFlaw, { foreignKey: 'meritFlawId', as: 'characterMeritsFlaws', onDelete: 'CASCADE' });
CharacterMeritFlaw_1.CharacterMeritFlaw.belongsTo(MeritFlawDefinition_1.MeritFlawDefinition, { foreignKey: 'meritFlawId', as: 'meritFlawDefinition' });
// --- Character <-> CharacterItem ---
Character_1.Character.hasMany(CharacterItem_1.CharacterItem, { foreignKey: 'characterId', as: 'items', onDelete: 'CASCADE' });
CharacterItem_1.CharacterItem.belongsTo(Character_1.Character, { foreignKey: 'characterId', as: 'character' });
// --- ItemDefinition <-> CharacterItem ---
ItemDefinition_1.ItemDefinition.hasMany(CharacterItem_1.CharacterItem, { foreignKey: 'itemId', as: 'characterItems', onDelete: 'CASCADE' });
CharacterItem_1.CharacterItem.belongsTo(ItemDefinition_1.ItemDefinition, { foreignKey: 'itemId', as: 'itemDefinition' });
// --- Character <-> CharacterBackground ---
Character_1.Character.hasMany(CharacterBackground_1.CharacterBackground, { foreignKey: 'characterId', as: 'backgrounds', onDelete: 'CASCADE' });
CharacterBackground_1.CharacterBackground.belongsTo(Character_1.Character, { foreignKey: 'characterId', as: 'character' });
// --- BackgroundDefinition <-> CharacterBackground ---
BackgroundDefinition_1.BackgroundDefinition.hasMany(CharacterBackground_1.CharacterBackground, { foreignKey: 'backgroundId', as: 'characterBackgrounds', onDelete: 'CASCADE' });
CharacterBackground_1.CharacterBackground.belongsTo(BackgroundDefinition_1.BackgroundDefinition, { foreignKey: 'backgroundId', as: 'backgroundDefinition' });
// --- Character <-> CharacterHaven ---
Character_1.Character.hasMany(CharacterHaven_1.CharacterHaven, { foreignKey: 'characterId', as: 'havens', onDelete: 'CASCADE' });
CharacterHaven_1.CharacterHaven.belongsTo(Character_1.Character, { foreignKey: 'characterId', as: 'character' });
// --- HavenDefinition <-> CharacterHaven ---
HavenDefinition_1.HavenDefinition.hasMany(CharacterHaven_1.CharacterHaven, { foreignKey: 'havenDefinitionId', as: 'characterHavens', onDelete: 'CASCADE' });
CharacterHaven_1.CharacterHaven.belongsTo(HavenDefinition_1.HavenDefinition, { foreignKey: 'havenDefinitionId', as: 'havenDefinition' });
// --- Region <-> CharacterHaven ---
Region_1.Region.hasMany(CharacterHaven_1.CharacterHaven, { foreignKey: 'regionId', as: 'characterHavens', onDelete: 'CASCADE' });
CharacterHaven_1.CharacterHaven.belongsTo(Region_1.Region, { foreignKey: 'regionId', as: 'region' });
// --- HavenDefinition -> BackgroundDefinition (FK opcional) ---
BackgroundDefinition_1.BackgroundDefinition.hasMany(HavenDefinition_1.HavenDefinition, { foreignKey: 'requiredBackgroundId', as: 'requiredByHavens' });
HavenDefinition_1.HavenDefinition.belongsTo(BackgroundDefinition_1.BackgroundDefinition, { foreignKey: 'requiredBackgroundId', as: 'requiredBackground' });
// --- Region (auto-referência hierárquica) ---
Region_1.Region.belongsTo(Region_1.Region, { foreignKey: 'parentRegionId', as: 'parentRegion' });
Region_1.Region.hasMany(Region_1.Region, { foreignKey: 'parentRegionId', as: 'childRegions', onDelete: 'SET NULL' });
// --- Region <-> RegionDemographic <-> DemographicProfile ---
Region_1.Region.hasMany(RegionDemographic_1.RegionDemographic, { foreignKey: 'regionId', as: 'demographics', onDelete: 'CASCADE' });
RegionDemographic_1.RegionDemographic.belongsTo(Region_1.Region, { foreignKey: 'regionId', as: 'region' });
DemographicProfile_1.DemographicProfile.hasMany(RegionDemographic_1.RegionDemographic, { foreignKey: 'demographicProfileId', as: 'regionDemographics', onDelete: 'CASCADE' });
RegionDemographic_1.RegionDemographic.belongsTo(DemographicProfile_1.DemographicProfile, { foreignKey: 'demographicProfileId', as: 'demographicProfile' });
// --- Region <-> RegionCriminality <-> Criminality ---
Region_1.Region.hasMany(RegionCriminality_1.RegionCriminality, { foreignKey: 'regionId', as: 'criminalities', onDelete: 'CASCADE' });
RegionCriminality_1.RegionCriminality.belongsTo(Region_1.Region, { foreignKey: 'regionId', as: 'region' });
Criminality_1.Criminality.hasMany(RegionCriminality_1.RegionCriminality, { foreignKey: 'criminalityId', as: 'regionCriminalities', onDelete: 'CASCADE' });
RegionCriminality_1.RegionCriminality.belongsTo(Criminality_1.Criminality, { foreignKey: 'criminalityId', as: 'criminality' });
// --- Region <-> RegionMediaVisibility <-> MediaVisibility ---
Region_1.Region.hasMany(RegionMediaVisibility_1.RegionMediaVisibility, { foreignKey: 'regionId', as: 'mediaVisibilities', onDelete: 'CASCADE' });
RegionMediaVisibility_1.RegionMediaVisibility.belongsTo(Region_1.Region, { foreignKey: 'regionId', as: 'region' });
MediaVisibility_1.MediaVisibility.hasMany(RegionMediaVisibility_1.RegionMediaVisibility, { foreignKey: 'mediaVisibilityId', as: 'regionMediaVisibilities', onDelete: 'CASCADE' });
RegionMediaVisibility_1.RegionMediaVisibility.belongsTo(MediaVisibility_1.MediaVisibility, { foreignKey: 'mediaVisibilityId', as: 'mediaVisibility' });
// --- Region <-> RegionPublicSecurity <-> PublicSecurity ---
Region_1.Region.hasMany(RegionPublicSecurity_1.RegionPublicSecurity, { foreignKey: 'regionId', as: 'publicSecurities', onDelete: 'CASCADE' });
RegionPublicSecurity_1.RegionPublicSecurity.belongsTo(Region_1.Region, { foreignKey: 'regionId', as: 'region' });
PublicSecurity_1.PublicSecurity.hasMany(RegionPublicSecurity_1.RegionPublicSecurity, { foreignKey: 'publicSecurityId', as: 'regionPublicSecurities', onDelete: 'CASCADE' });
RegionPublicSecurity_1.RegionPublicSecurity.belongsTo(PublicSecurity_1.PublicSecurity, { foreignKey: 'publicSecurityId', as: 'publicSecurity' });
// --- Region <-> RegionWealth <-> Wealth ---
Region_1.Region.hasMany(RegionWealth_1.RegionWealth, { foreignKey: 'regionId', as: 'wealths', onDelete: 'CASCADE' });
RegionWealth_1.RegionWealth.belongsTo(Region_1.Region, { foreignKey: 'regionId', as: 'region' });
Wealth_1.Wealth.hasMany(RegionWealth_1.RegionWealth, { foreignKey: 'wealthId', as: 'regionWealths', onDelete: 'CASCADE' });
RegionWealth_1.RegionWealth.belongsTo(Wealth_1.Wealth, { foreignKey: 'wealthId', as: 'wealth' });
// --- Adventure <-> AdventureScene <-> Scene ---
Adventure_1.Adventure.hasMany(AdventureScene_1.AdventureScene, { foreignKey: 'adventureId', as: 'adventureScenes', onDelete: 'CASCADE' });
AdventureScene_1.AdventureScene.belongsTo(Adventure_1.Adventure, { foreignKey: 'adventureId', as: 'adventure' });
Scene_1.Scene.hasMany(AdventureScene_1.AdventureScene, { foreignKey: 'sceneId', as: 'adventureScenes', onDelete: 'CASCADE' });
AdventureScene_1.AdventureScene.belongsTo(Scene_1.Scene, { foreignKey: 'sceneId', as: 'scene' });
// --- Scene <-> SceneAction <-> Action ---
// Cena principal que contém a ação
Scene_1.Scene.hasMany(SceneAction_1.SceneAction, { foreignKey: 'sceneId', as: 'actions', onDelete: 'CASCADE' });
SceneAction_1.SceneAction.belongsTo(Scene_1.Scene, { foreignKey: 'sceneId', as: 'scene' });
// Cena de sucesso (resultado positivo da ação)
Scene_1.Scene.hasMany(SceneAction_1.SceneAction, { foreignKey: 'successSceneId', as: 'actionSuccesses', onDelete: 'SET NULL' });
SceneAction_1.SceneAction.belongsTo(Scene_1.Scene, { foreignKey: 'successSceneId', as: 'successScene' });
// Cena de falha (resultado negativo da ação)
Scene_1.Scene.hasMany(SceneAction_1.SceneAction, { foreignKey: 'failureSceneId', as: 'actionFailures', onDelete: 'SET NULL' });
SceneAction_1.SceneAction.belongsTo(Scene_1.Scene, { foreignKey: 'failureSceneId', as: 'failureScene' });
// Ação referenciada no SceneAction
Action_1.Action.hasMany(SceneAction_1.SceneAction, { foreignKey: 'actionId', as: 'sceneActions', onDelete: 'CASCADE' });
SceneAction_1.SceneAction.belongsTo(Action_1.Action, { foreignKey: 'actionId', as: 'action' });
