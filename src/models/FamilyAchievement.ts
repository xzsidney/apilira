import { Model, DataTypes, Sequelize } from 'sequelize';

export class FamilyAchievement extends Model {
  declare id: string;
  declare title: string;
  declare description: string;
  declare icon: string;
  declare category: string;
  declare rewardXp: number;
  declare rewardGold: number;
  declare requiredCount: number;
  declare createdAt: Date;
  declare updatedAt: Date;
}

export function initFamilyAchievement(sequelize: Sequelize) {
  FamilyAchievement.init(
    {
      id: {
        type: DataTypes.STRING(36),
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      title: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      icon: {
        type: DataTypes.STRING(50),
        allowNull: false,
        defaultValue: '🏆',
      },
      category: {
        type: DataTypes.STRING(50),
        allowNull: false,
        defaultValue: 'GENERAL',
      },
      rewardXp: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 50,
      },
      rewardGold: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 20,
      },
      requiredCount: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
    },
    {
      sequelize,
      modelName: 'FamilyAchievement',
      tableName: 'family_achievements',
      timestamps: true,
    }
  );
  return FamilyAchievement;
}
