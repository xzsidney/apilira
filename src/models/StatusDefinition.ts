import { Model, DataTypes, Sequelize } from 'sequelize';

// Definição de status (vida, vontade, etc.) por estilo de jogo
export class StatusDefinition extends Model {
  declare id: string;
  declare name: string;
  declare gameStyle: string;
  declare maxValue: number;
  declare defaultInitialValue: number;
  declare description: string | null;
  declare createdAt: Date;
  declare updatedAt: Date;
}

export function initStatusDefinition(sequelize: Sequelize) {
  StatusDefinition.init(
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
      maxValue: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      defaultInitialValue: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: 'StatusDefinition',
      freezeTableName: true,
      timestamps: true,
      indexes: [
        {
          unique: true,
          fields: ['name', 'gameStyle'],
        },
      ],
    }
  );
  return StatusDefinition;
}
