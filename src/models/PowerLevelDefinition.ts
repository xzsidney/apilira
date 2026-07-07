import { Model, DataTypes, Sequelize } from 'sequelize';

// Definição dos níveis de cada poder sobrenatural
export class PowerLevelDefinition extends Model {
  declare id: string;
  declare powerDefinitionId: string;
  declare level: number;
  declare name: string;
  declare description: string | null;
  declare system: string | null;
  declare createdAt: Date;
  declare updatedAt: Date;
}

export function initPowerLevelDefinition(sequelize: Sequelize) {
  PowerLevelDefinition.init(
    {
      id: {
        type: DataTypes.STRING(36),
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      powerDefinitionId: {
        type: DataTypes.STRING(36),
        allowNull: false,
      },
      level: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      system: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: 'PowerLevelDefinition',
      freezeTableName: true,
      timestamps: true,
      indexes: [
        {
          unique: true,
          fields: ['powerDefinitionId', 'level', 'name'],
        },
      ],
    }
  );
  return PowerLevelDefinition;
}
