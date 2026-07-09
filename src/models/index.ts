/**
 * Arquivo central de modelos Sequelize.
 * Importa, inicializa e define todas as associações entre os modelos.
 */
import sequelize from '../config/database';

// ==================== Importação dos modelos ====================
import { User, initUser } from './User';
import { Character, initCharacter } from './Character';
import { VampireClaDefinition, initVampireClaDefinition } from './VampireClaDefinition';
import { VampirePredatorDefinition, initVampirePredatorDefinition } from './VampirePredatorDefinition';
import { VampireResonanceDefinition, initVampireResonanceDefinition } from './VampireResonanceDefinition';
import { WerewolfTribeDefinition, initWerewolfTribeDefinition } from './WerewolfTribeDefinition';
import { MageTraditionDefinition, initMageTraditionDefinition } from './MageTraditionDefinition';
import { HunterCreedDefinition, initHunterCreedDefinition } from './HunterCreedDefinition';
import { AttributeDefinition, initAttributeDefinition } from './AttributeDefinition';
import { CharacterAttribute, initCharacterAttribute } from './CharacterAttribute';
import { SkillDefinition, initSkillDefinition } from './SkillDefinition';
import { CharacterSkill, initCharacterSkill } from './CharacterSkill';
import { StatusDefinition, initStatusDefinition } from './StatusDefinition';
import { CharacterStatus, initCharacterStatus } from './CharacterStatus';
import { PowerDefinition, initPowerDefinition } from './PowerDefinition';
import { PowerLevelDefinition, initPowerLevelDefinition } from './PowerLevelDefinition';
import { CharacterPower, initCharacterPower } from './CharacterPower';
import { CharacterPowerSelection, initCharacterPowerSelection } from './CharacterPowerSelection';
import { MeritFlawDefinition, initMeritFlawDefinition } from './MeritFlawDefinition';
import { CharacterMeritFlaw, initCharacterMeritFlaw } from './CharacterMeritFlaw';
import { ItemDefinition, initItemDefinition } from './ItemDefinition';
import { CharacterItem, initCharacterItem } from './CharacterItem';
import { BackgroundDefinition, initBackgroundDefinition } from './BackgroundDefinition';
import { CharacterBackground, initCharacterBackground } from './CharacterBackground';
import { HavenDefinition, initHavenDefinition } from './HavenDefinition';
import { CharacterHaven, initCharacterHaven } from './CharacterHaven';
import { Region, initRegion } from './Region';
import { DemographicProfile, initDemographicProfile } from './DemographicProfile';
import { Criminality, initCriminality } from './Criminality';
import { MediaVisibility, initMediaVisibility } from './MediaVisibility';
import { PublicSecurity, initPublicSecurity } from './PublicSecurity';
import { Wealth, initWealth } from './Wealth';
import { RegionDemographic, initRegionDemographic } from './RegionDemographic';
import { RegionCriminality, initRegionCriminality } from './RegionCriminality';
import { RegionMediaVisibility, initRegionMediaVisibility } from './RegionMediaVisibility';
import { RegionPublicSecurity, initRegionPublicSecurity } from './RegionPublicSecurity';
import { RegionWealth, initRegionWealth } from './RegionWealth';
import { Adventure, initAdventure } from './Adventure';
import { Scene, initScene } from './Scene';
import { Action, initAction } from './Action';
import { AdventureScene, initAdventureScene } from './AdventureScene';
import { SceneAction, initSceneAction } from './SceneAction';

// ==================== Inicialização dos modelos ====================
initUser(sequelize);
initCharacter(sequelize);
initVampireClaDefinition(sequelize);
initVampirePredatorDefinition(sequelize);
initVampireResonanceDefinition(sequelize);
initWerewolfTribeDefinition(sequelize);
initMageTraditionDefinition(sequelize);
initHunterCreedDefinition(sequelize);
initAttributeDefinition(sequelize);
initCharacterAttribute(sequelize);
initSkillDefinition(sequelize);
initCharacterSkill(sequelize);
initStatusDefinition(sequelize);
initCharacterStatus(sequelize);
initPowerDefinition(sequelize);
initPowerLevelDefinition(sequelize);
initCharacterPower(sequelize);
initCharacterPowerSelection(sequelize);
initMeritFlawDefinition(sequelize);
initCharacterMeritFlaw(sequelize);
initItemDefinition(sequelize);
initCharacterItem(sequelize);
initBackgroundDefinition(sequelize);
initCharacterBackground(sequelize);
initHavenDefinition(sequelize);
initCharacterHaven(sequelize);
initRegion(sequelize);
initDemographicProfile(sequelize);
initCriminality(sequelize);
initMediaVisibility(sequelize);
initPublicSecurity(sequelize);
initWealth(sequelize);
initRegionDemographic(sequelize);
initRegionCriminality(sequelize);
initRegionMediaVisibility(sequelize);
initRegionPublicSecurity(sequelize);
initRegionWealth(sequelize);
initAdventure(sequelize);
initScene(sequelize);
initAction(sequelize);
initAdventureScene(sequelize);
initSceneAction(sequelize);

// ==================== Associações ====================

// --- User <-> Character ---
User.hasMany(Character, { foreignKey: 'userId', as: 'characters', onDelete: 'CASCADE' });
Character.belongsTo(User, { foreignKey: 'userId', as: 'user' });

// --- Factions <-> Character ---
VampireClaDefinition.hasMany(Character, { foreignKey: 'vampireClaId', as: 'vampireCharacters', onDelete: 'SET NULL' });
Character.belongsTo(VampireClaDefinition, { foreignKey: 'vampireClaId', as: 'vampireCla' });

VampirePredatorDefinition.hasMany(Character, { foreignKey: 'vampirePredatorId', as: 'vampirePredatorCharacters', onDelete: 'SET NULL' });
Character.belongsTo(VampirePredatorDefinition, { foreignKey: 'vampirePredatorId', as: 'vampirePredator' });

VampireResonanceDefinition.hasMany(Character, { foreignKey: 'vampireResonanceId', as: 'vampireResonanceCharacters', onDelete: 'SET NULL' });
Character.belongsTo(VampireResonanceDefinition, { foreignKey: 'vampireResonanceId', as: 'vampireResonance' });

WerewolfTribeDefinition.hasMany(Character, { foreignKey: 'werewolfTribeId', as: 'werewolfCharacters', onDelete: 'SET NULL' });
Character.belongsTo(WerewolfTribeDefinition, { foreignKey: 'werewolfTribeId', as: 'werewolfTribe' });

MageTraditionDefinition.hasMany(Character, { foreignKey: 'mageTraditionId', as: 'mageCharacters', onDelete: 'SET NULL' });
Character.belongsTo(MageTraditionDefinition, { foreignKey: 'mageTraditionId', as: 'mageTradition' });

HunterCreedDefinition.hasMany(Character, { foreignKey: 'hunterCreedId', as: 'hunterCharacters', onDelete: 'SET NULL' });
Character.belongsTo(HunterCreedDefinition, { foreignKey: 'hunterCreedId', as: 'hunterCreed' });

// --- Character <-> CharacterAttribute ---
Character.hasMany(CharacterAttribute, { foreignKey: 'characterId', as: 'attributes', onDelete: 'CASCADE' });
CharacterAttribute.belongsTo(Character, { foreignKey: 'characterId', as: 'character' });

// --- AttributeDefinition <-> CharacterAttribute ---
AttributeDefinition.hasMany(CharacterAttribute, { foreignKey: 'attributeId', as: 'characterAttributes', onDelete: 'CASCADE' });
CharacterAttribute.belongsTo(AttributeDefinition, { foreignKey: 'attributeId', as: 'attributeDefinition' });

// --- Character <-> CharacterSkill ---
Character.hasMany(CharacterSkill, { foreignKey: 'characterId', as: 'skills', onDelete: 'CASCADE' });
CharacterSkill.belongsTo(Character, { foreignKey: 'characterId', as: 'character' });

// --- SkillDefinition <-> CharacterSkill ---
SkillDefinition.hasMany(CharacterSkill, { foreignKey: 'skillId', as: 'characterSkills', onDelete: 'CASCADE' });
CharacterSkill.belongsTo(SkillDefinition, { foreignKey: 'skillId', as: 'skillDefinition' });

// --- Character <-> CharacterStatus ---
Character.hasMany(CharacterStatus, { foreignKey: 'characterId', as: 'statuses', onDelete: 'CASCADE' });
CharacterStatus.belongsTo(Character, { foreignKey: 'characterId', as: 'character' });

// --- StatusDefinition <-> CharacterStatus ---
StatusDefinition.hasMany(CharacterStatus, { foreignKey: 'statusId', as: 'characterStatuses', onDelete: 'CASCADE' });
CharacterStatus.belongsTo(StatusDefinition, { foreignKey: 'statusId', as: 'statusDefinition' });

// --- PowerDefinition <-> PowerLevelDefinition ---
PowerDefinition.hasMany(PowerLevelDefinition, { foreignKey: 'powerDefinitionId', as: 'levels', onDelete: 'CASCADE' });
PowerLevelDefinition.belongsTo(PowerDefinition, { foreignKey: 'powerDefinitionId', as: 'powerDefinition' });

// --- Character <-> CharacterPower ---
Character.hasMany(CharacterPower, { foreignKey: 'characterId', as: 'powers', onDelete: 'CASCADE' });
CharacterPower.belongsTo(Character, { foreignKey: 'characterId', as: 'character' });

// --- PowerDefinition <-> CharacterPower ---
PowerDefinition.hasMany(CharacterPower, { foreignKey: 'powerDefinitionId', as: 'characterPowers', onDelete: 'CASCADE' });
CharacterPower.belongsTo(PowerDefinition, { foreignKey: 'powerDefinitionId', as: 'powerDefinition' });

// --- CharacterPower <-> CharacterPowerSelection ---
CharacterPower.hasMany(CharacterPowerSelection, { foreignKey: 'characterPowerId', as: 'selections', onDelete: 'CASCADE' });
CharacterPowerSelection.belongsTo(CharacterPower, { foreignKey: 'characterPowerId', as: 'characterPower' });

// --- PowerLevelDefinition <-> CharacterPowerSelection ---
PowerLevelDefinition.hasMany(CharacterPowerSelection, { foreignKey: 'powerLevelDefinitionId', as: 'characterSelections', onDelete: 'CASCADE' });
CharacterPowerSelection.belongsTo(PowerLevelDefinition, { foreignKey: 'powerLevelDefinitionId', as: 'powerLevelDefinition' });

// --- Character <-> CharacterMeritFlaw ---
Character.hasMany(CharacterMeritFlaw, { foreignKey: 'characterId', as: 'meritsFlaws', onDelete: 'CASCADE' });
CharacterMeritFlaw.belongsTo(Character, { foreignKey: 'characterId', as: 'character' });

// --- MeritFlawDefinition <-> CharacterMeritFlaw ---
MeritFlawDefinition.hasMany(CharacterMeritFlaw, { foreignKey: 'meritFlawId', as: 'characterMeritsFlaws', onDelete: 'CASCADE' });
CharacterMeritFlaw.belongsTo(MeritFlawDefinition, { foreignKey: 'meritFlawId', as: 'meritFlawDefinition' });

// --- Character <-> CharacterItem ---
Character.hasMany(CharacterItem, { foreignKey: 'characterId', as: 'items', onDelete: 'CASCADE' });
CharacterItem.belongsTo(Character, { foreignKey: 'characterId', as: 'character' });

// --- ItemDefinition <-> CharacterItem ---
ItemDefinition.hasMany(CharacterItem, { foreignKey: 'itemId', as: 'characterItems', onDelete: 'CASCADE' });
CharacterItem.belongsTo(ItemDefinition, { foreignKey: 'itemId', as: 'itemDefinition' });

// --- Character <-> CharacterBackground ---
Character.hasMany(CharacterBackground, { foreignKey: 'characterId', as: 'backgrounds', onDelete: 'CASCADE' });
CharacterBackground.belongsTo(Character, { foreignKey: 'characterId', as: 'character' });

// --- BackgroundDefinition <-> CharacterBackground ---
BackgroundDefinition.hasMany(CharacterBackground, { foreignKey: 'backgroundId', as: 'characterBackgrounds', onDelete: 'CASCADE' });
CharacterBackground.belongsTo(BackgroundDefinition, { foreignKey: 'backgroundId', as: 'backgroundDefinition' });

// --- Character <-> CharacterHaven ---
Character.hasMany(CharacterHaven, { foreignKey: 'characterId', as: 'havens', onDelete: 'CASCADE' });
CharacterHaven.belongsTo(Character, { foreignKey: 'characterId', as: 'character' });

// --- HavenDefinition <-> CharacterHaven ---
HavenDefinition.hasMany(CharacterHaven, { foreignKey: 'havenDefinitionId', as: 'characterHavens', onDelete: 'CASCADE' });
CharacterHaven.belongsTo(HavenDefinition, { foreignKey: 'havenDefinitionId', as: 'havenDefinition' });

// --- Region <-> CharacterHaven ---
Region.hasMany(CharacterHaven, { foreignKey: 'regionId', as: 'characterHavens', onDelete: 'CASCADE' });
CharacterHaven.belongsTo(Region, { foreignKey: 'regionId', as: 'region' });

// --- HavenDefinition -> BackgroundDefinition (FK opcional) ---
BackgroundDefinition.hasMany(HavenDefinition, { foreignKey: 'requiredBackgroundId', as: 'requiredByHavens' });
HavenDefinition.belongsTo(BackgroundDefinition, { foreignKey: 'requiredBackgroundId', as: 'requiredBackground' });

// --- Region (auto-referência hierárquica) ---
Region.belongsTo(Region, { foreignKey: 'parentRegionId', as: 'parentRegion' });
Region.hasMany(Region, { foreignKey: 'parentRegionId', as: 'childRegions', onDelete: 'SET NULL' });

// --- Region <-> RegionDemographic <-> DemographicProfile ---
Region.hasMany(RegionDemographic, { foreignKey: 'regionId', as: 'demographics', onDelete: 'CASCADE' });
RegionDemographic.belongsTo(Region, { foreignKey: 'regionId', as: 'region' });
DemographicProfile.hasMany(RegionDemographic, { foreignKey: 'demographicProfileId', as: 'regionDemographics', onDelete: 'CASCADE' });
RegionDemographic.belongsTo(DemographicProfile, { foreignKey: 'demographicProfileId', as: 'demographicProfile' });

// --- Region <-> RegionCriminality <-> Criminality ---
Region.hasMany(RegionCriminality, { foreignKey: 'regionId', as: 'criminalities', onDelete: 'CASCADE' });
RegionCriminality.belongsTo(Region, { foreignKey: 'regionId', as: 'region' });
Criminality.hasMany(RegionCriminality, { foreignKey: 'criminalityId', as: 'regionCriminalities', onDelete: 'CASCADE' });
RegionCriminality.belongsTo(Criminality, { foreignKey: 'criminalityId', as: 'criminality' });

// --- Region <-> RegionMediaVisibility <-> MediaVisibility ---
Region.hasMany(RegionMediaVisibility, { foreignKey: 'regionId', as: 'mediaVisibilities', onDelete: 'CASCADE' });
RegionMediaVisibility.belongsTo(Region, { foreignKey: 'regionId', as: 'region' });
MediaVisibility.hasMany(RegionMediaVisibility, { foreignKey: 'mediaVisibilityId', as: 'regionMediaVisibilities', onDelete: 'CASCADE' });
RegionMediaVisibility.belongsTo(MediaVisibility, { foreignKey: 'mediaVisibilityId', as: 'mediaVisibility' });

// --- Region <-> RegionPublicSecurity <-> PublicSecurity ---
Region.hasMany(RegionPublicSecurity, { foreignKey: 'regionId', as: 'publicSecurities', onDelete: 'CASCADE' });
RegionPublicSecurity.belongsTo(Region, { foreignKey: 'regionId', as: 'region' });
PublicSecurity.hasMany(RegionPublicSecurity, { foreignKey: 'publicSecurityId', as: 'regionPublicSecurities', onDelete: 'CASCADE' });
RegionPublicSecurity.belongsTo(PublicSecurity, { foreignKey: 'publicSecurityId', as: 'publicSecurity' });

// --- Region <-> RegionWealth <-> Wealth ---
Region.hasMany(RegionWealth, { foreignKey: 'regionId', as: 'wealths', onDelete: 'CASCADE' });
RegionWealth.belongsTo(Region, { foreignKey: 'regionId', as: 'region' });
Wealth.hasMany(RegionWealth, { foreignKey: 'wealthId', as: 'regionWealths', onDelete: 'CASCADE' });
RegionWealth.belongsTo(Wealth, { foreignKey: 'wealthId', as: 'wealth' });

// --- Adventure <-> AdventureScene <-> Scene ---
Adventure.hasMany(AdventureScene, { foreignKey: 'adventureId', as: 'adventureScenes', onDelete: 'CASCADE' });
AdventureScene.belongsTo(Adventure, { foreignKey: 'adventureId', as: 'adventure' });
Scene.hasMany(AdventureScene, { foreignKey: 'sceneId', as: 'adventureScenes', onDelete: 'CASCADE' });
AdventureScene.belongsTo(Scene, { foreignKey: 'sceneId', as: 'scene' });

// --- Scene <-> SceneAction <-> Action ---
// Cena principal que contém a ação
Scene.hasMany(SceneAction, { foreignKey: 'sceneId', as: 'actions', onDelete: 'CASCADE' });
SceneAction.belongsTo(Scene, { foreignKey: 'sceneId', as: 'scene' });

// Cena de sucesso (resultado positivo da ação)
Scene.hasMany(SceneAction, { foreignKey: 'successSceneId', as: 'actionSuccesses', onDelete: 'SET NULL' });
SceneAction.belongsTo(Scene, { foreignKey: 'successSceneId', as: 'successScene' });

// Cena de falha (resultado negativo da ação)
Scene.hasMany(SceneAction, { foreignKey: 'failureSceneId', as: 'actionFailures', onDelete: 'SET NULL' });
SceneAction.belongsTo(Scene, { foreignKey: 'failureSceneId', as: 'failureScene' });

// Ação referenciada no SceneAction
Action.hasMany(SceneAction, { foreignKey: 'actionId', as: 'sceneActions', onDelete: 'CASCADE' });
SceneAction.belongsTo(Action, { foreignKey: 'actionId', as: 'action' });

// ==================== Exportação dos modelos ====================
export {
  sequelize,
  User,
  Character,
  VampireClaDefinition,
  VampirePredatorDefinition,
  VampireResonanceDefinition,
  WerewolfTribeDefinition,
  MageTraditionDefinition,
  HunterCreedDefinition,
  AttributeDefinition,
  CharacterAttribute,
  SkillDefinition,
  CharacterSkill,
  StatusDefinition,
  CharacterStatus,
  PowerDefinition,
  PowerLevelDefinition,
  CharacterPower,
  CharacterPowerSelection,
  MeritFlawDefinition,
  CharacterMeritFlaw,
  ItemDefinition,
  CharacterItem,
  BackgroundDefinition,
  CharacterBackground,
  HavenDefinition,
  CharacterHaven,
  Region,
  DemographicProfile,
  Criminality,
  MediaVisibility,
  PublicSecurity,
  Wealth,
  RegionDemographic,
  RegionCriminality,
  RegionMediaVisibility,
  RegionPublicSecurity,
  RegionWealth,
  Adventure,
  Scene,
  Action,
  AdventureScene,
  SceneAction,
};
