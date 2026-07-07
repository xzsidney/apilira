import { Model, DataTypes, Sequelize } from 'sequelize';

// Ação disponível em uma cena
export class Action extends Model {
  declare id: string;
  declare actionIdentifier: string;
  declare focus: string;
  declare text: string;
  declare testStr: string;
  declare difficulty: number;
  declare createdAt: Date;
  declare updatedAt: Date;
}

export function initAction(sequelize: Sequelize) {
  Action.init(
    {
      id: {
        type: DataTypes.STRING(36),
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      actionIdentifier: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      focus: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      text: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      testStr: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      difficulty: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
    },
    {
      sequelize,
      tableName: 'Action',
      freezeTableName: true,
      timestamps: true,
    }
  );
  return Action;
}
