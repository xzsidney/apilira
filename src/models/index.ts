import sequelize from '../config/db';
import { initUser, User } from './User';
import { initDefinitionAttribute, DefinitionAttribute } from './DefinitionAttribute';
import { initDefinitionSkill, DefinitionSkill } from './DefinitionSkill';

// Initialize models
initUser(sequelize);
initDefinitionAttribute(sequelize);
initDefinitionSkill(sequelize);

// Export
export { sequelize, User, DefinitionAttribute, DefinitionSkill };
