import { Model, DataTypes, Sequelize } from 'sequelize';

export class DefinitionBloodPotency extends Model {
  declare id: string;
  declare level: number;
  declare bloodSurge: string;
  declare mendAmount: string;
  declare disciplineBonus: string;
  declare baneSeverity: number;
  declare feedingPenalty: string;
  declare gameStyle: 'VAMPIRE';
  declare createdAt: Date;
  declare updatedAt: Date;
}

export function initDefinitionBloodPotency(sequelize: Sequelize) {
  DefinitionBloodPotency.init(
    {
      id: {
        type: DataTypes.STRING(36),
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      level: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true, // Cada nível de 0 a 10 é único
      },
      bloodSurge: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      mendAmount: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      disciplineBonus: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      baneSeverity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      feedingPenalty: {
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
      tableName: 'DefinitionBloodPotency',
      freezeTableName: true,
      timestamps: true,
    }
  );
  return DefinitionBloodPotency;
}
