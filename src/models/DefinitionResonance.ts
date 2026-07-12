import { Model, DataTypes, Sequelize } from 'sequelize';

export class DefinitionResonance extends Model {
  declare id: string;
  declare name: string;
  declare description: string;
  declare disciplines: string;
  declare gameStyle: 'VAMPIRE';
  declare createdAt: Date;
  declare updatedAt: Date;
}

export function initDefinitionResonance(sequelize: Sequelize) {
  DefinitionResonance.init(
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
      disciplines: {
        type: DataTypes.STRING,
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
      tableName: 'DefinitionResonance',
      freezeTableName: true,
      timestamps: true,
    }
  );
  return DefinitionResonance;
}
