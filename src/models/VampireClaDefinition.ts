import { Model, DataTypes, Sequelize } from 'sequelize';

export class VampireClaDefinition extends Model {
  declare id: string;
  declare name: string;
  declare nickname: string;
  declare description: string;
  declare sectAlignment: string;
  declare mainDisciplines: string[];
  declare weaknessName: string;
  declare weaknessDescription: string;
  declare weaknessExamples: string[] | null;
  declare createdAt: Date;
  declare updatedAt: Date;
}

export function initVampireClaDefinition(sequelize: Sequelize) {
  VampireClaDefinition.init(
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
      nickname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      sectAlignment: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      mainDisciplines: {
        type: DataTypes.JSON,
        allowNull: false,
      },
      weaknessName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      weaknessDescription: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      weaknessExamples: {
        type: DataTypes.JSON,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: 'VampireClaDefinition',
      freezeTableName: true,
      timestamps: true,
    }
  );
  return VampireClaDefinition;
}
