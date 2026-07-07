import { Model, DataTypes, Sequelize } from 'sequelize';

// Modelo de Usuário do sistema
export class User extends Model {
  declare id: string;
  declare name: string;
  declare email: string;
  declare password: string;
  declare role: 'ADMIN' | 'MESTRE' | 'JOGADOR';
  declare createdAt: Date;
  declare updatedAt: Date;
}

export function initUser(sequelize: Sequelize) {
  User.init(
    {
      id: {
        type: DataTypes.STRING(36),
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      role: {
        type: DataTypes.ENUM('ADMIN', 'MESTRE', 'JOGADOR'),
        allowNull: false,
        defaultValue: 'JOGADOR',
      },
    },
    {
      sequelize,
      tableName: 'User',
      freezeTableName: true,
      timestamps: true,
    }
  );
  return User;
}
