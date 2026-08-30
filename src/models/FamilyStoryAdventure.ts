import { Model, DataTypes, Sequelize } from 'sequelize';

export class FamilyStoryAdventure extends Model {
  declare id: string;
  declare title: string;
  declare summary: string;
  declare coverImageUrl: string;
  declare initialNodeId: string;
  declare recommendedLevel: number;
  declare rewardXp: number;
  declare rewardGold: number;
  declare isActive: boolean;
  declare createdAt: Date;
  declare updatedAt: Date;
}

export function initFamilyStoryAdventure(sequelize: Sequelize) {
  FamilyStoryAdventure.init(
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
      summary: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      coverImageUrl: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      initialNodeId: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      recommendedLevel: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
      rewardXp: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 80,
      },
      rewardGold: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 25,
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
    },
    {
      sequelize,
      modelName: 'FamilyStoryAdventure',
      tableName: 'family_story_adventures',
      timestamps: true,
    }
  );
  return FamilyStoryAdventure;
}
