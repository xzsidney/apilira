import { Model, DataTypes, Sequelize } from 'sequelize';

// Região do mundo de jogo com hierarquia (auto-referência)
export class Region extends Model {
  declare id: string;
  declare name: string;
  declare level: number;
  declare description: string | null;
  declare narrativeClimate: string | null;
  declare factionDomain: string | null;
  declare difficultyDomain: number | null;
  declare dangerLevel: number;
  declare parentRegionId: string | null;
  declare createdAt: Date;
  declare updatedAt: Date;
}

export function initRegion(sequelize: Sequelize) {
  Region.init(
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
      level: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      narrativeClimate: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      factionDomain: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      difficultyDomain: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      dangerLevel: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
      parentRegionId: {
        type: DataTypes.STRING(36),
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: 'Region',
      freezeTableName: true,
      timestamps: true,
    }
  );
  return Region;
}
