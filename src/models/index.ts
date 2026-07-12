import sequelize from '../config/db';
import { initUser, User } from './User';
import { initDefinitionAttribute, DefinitionAttribute } from './DefinitionAttribute';
import { initDefinitionSkill, DefinitionSkill } from './DefinitionSkill';
import { initDefinitionArchetype, DefinitionArchetype } from './DefinitionArchetype';
import { initDefinitionMeritFlaw, DefinitionMeritFlaw } from './DefinitionMeritFlaw';

// Initialize models
initUser(sequelize);
initDefinitionAttribute(sequelize);
initDefinitionSkill(sequelize);
initDefinitionArchetype(sequelize);
initDefinitionMeritFlaw(sequelize);

// Export
export { sequelize, User, DefinitionAttribute, DefinitionSkill, DefinitionArchetype, DefinitionMeritFlaw };
