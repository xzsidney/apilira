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

// Associations
DefinitionDiscipline.hasMany(DefinitionDisciplinePower, { foreignKey: 'definitionDisciplineId' });
DefinitionDisciplinePower.belongsTo(DefinitionDiscipline, { foreignKey: 'definitionDisciplineId' });

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
  CharacterVampireEquipment
};
