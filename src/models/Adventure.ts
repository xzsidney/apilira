import { Model, DataTypes, Sequelize } from 'sequelize';

// Aventura do sistema de RPG
export class Adventure extends Model {
  declare id: string;
  declare name: string;
  declare gameStyle: string;
  declare objective: string | null;
  declare createdAt: Date;
  declare updatedAt: Date;
}

export function initAdventure(sequelize: Sequelize) {
  Adventure.init(
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
      gameStyle: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      objective: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: 'Adventure',
      freezeTableName: true,
      timestamps: true,
    }
  );
  return Adventure;
}
