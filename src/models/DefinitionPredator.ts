import { Model, DataTypes, Sequelize } from 'sequelize';

export class DefinitionPredator extends Model {
  declare id: string;
  declare name: string;
  declare description: string;
  declare huntingPool: string;
  declare modifiers: string;
  declare gameStyle: 'VAMPIRE';
  declare createdAt: Date;
  declare updatedAt: Date;
}

export function initDefinitionPredator(sequelize: Sequelize) {
  DefinitionPredator.init(
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
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      huntingPool: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      modifiers: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      gameStyle: {
        type: DataTypes.ENUM('VAMPIRE'),
        allowNull: false,
        defaultValue: 'VAMPIRE',
      },
    },
    {
      sequelize,
      tableName: 'DefinitionPredator',
      freezeTableName: true,
      timestamps: true,
    }
  );
  return DefinitionPredator;
}
