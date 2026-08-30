import { Model, DataTypes, Sequelize } from 'sequelize';

export class FamilyBattle extends Model {
  declare id: string;
  declare title: string;
  declare monsterName: string;
  declare monsterAvatar: string;
  declare monsterHpCurrent: number;
  declare monsterHpMax: number;
  declare monsterAttack: number;
  declare monsterDefense: number;
  declare rewardXp: number;
  declare rewardGold: number;
  declare status: 'IN_PROGRESS' | 'VICTORY' | 'DEFEAT';
  declare currentTurnOrder: string[];
  declare activeTurnIndex: number;
  declare battleLogs: string[];
  declare createdAt: Date;
  declare updatedAt: Date;
}

export function initFamilyBattle(sequelize: Sequelize) {
  FamilyBattle.init(
    {
      id: {
        type: DataTypes.STRING(36),
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      title: {
        type: DataTypes.STRING(150),
        allowNull: false,
      },
      monsterName: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      monsterAvatar: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      monsterHpCurrent: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 500,
      },
      monsterHpMax: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 500,
      },
      monsterAttack: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 20,
      },
      monsterDefense: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 5,
      },
      rewardXp: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 150,
      },
      rewardGold: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 50,
      },
      status: {
        type: DataTypes.ENUM('IN_PROGRESS', 'VICTORY', 'DEFEAT'),
        allowNull: false,
        defaultValue: 'IN_PROGRESS',
      },
      currentTurnOrder: {
        type: DataTypes.JSON,
        allowNull: false,
        defaultValue: [],
      },
      activeTurnIndex: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      battleLogs: {
        type: DataTypes.JSON,
        allowNull: false,
        defaultValue: [],
      },
    },
    {
      sequelize,
      modelName: 'FamilyBattle',
      tableName: 'family_battles',
      timestamps: true,
    }
  );
  return FamilyBattle;
}
