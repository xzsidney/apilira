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

// Associations
DefinitionDiscipline.hasMany(DefinitionDisciplinePower, { foreignKey: 'definitionDisciplineId' });
DefinitionDisciplinePower.belongsTo(DefinitionDiscipline, { foreignKey: 'definitionDisciplineId' });

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
  DefinitionDisciplinePower
};
