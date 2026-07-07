import { Model, DataTypes, Sequelize } from 'sequelize';

// Definição de refúgios disponíveis no jogo
export class HavenDefinition extends Model {
  declare id: string;
  declare name: string;
  declare description: string | null;
  declare price: number;
  declare securityLevel: number;
  declare minionCapacity: number;
  declare allyCapacity: number;
  declare requiredBackgroundId: string | null;
  declare createdAt: Date;
  declare updatedAt: Date;
}

export function initHavenDefinition(sequelize: Sequelize) {
  HavenDefinition.init(
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
        allowNull: true,
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0.0,
      },
      securityLevel: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
      minionCapacity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      allyCapacity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      requiredBackgroundId: {
        type: DataTypes.STRING(36),
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: 'HavenDefinition',
      freezeTableName: true,
      timestamps: true,
    }
  );
  return HavenDefinition;
}
