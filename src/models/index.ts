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
  DefinitionPredator
};
