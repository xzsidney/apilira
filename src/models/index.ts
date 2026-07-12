import sequelize from '../config/db';
import { initUser, User } from './User';
import { initDefinitionAttribute, DefinitionAttribute } from './DefinitionAttribute';

// Initialize models
initUser(sequelize);
initDefinitionAttribute(sequelize);

// Export
export { sequelize, User, DefinitionAttribute };
