import sequelize from '../config/db';
import { initUser, User } from './User';

// Initialize the only remaining model
initUser(sequelize);

// Export
export { sequelize, User };
