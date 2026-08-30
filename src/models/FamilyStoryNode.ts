import { Model, DataTypes, Sequelize } from 'sequelize';

export class FamilyStoryNode extends Model {
  declare id: string;
  declare adventureId: string;
  declare nodeId: string;
  declare title: string;
  declare narration: string;
  declare speakerName: string | null;
  declare speakerAvatar: string | null;
  declare bgImageUrl: string;
  declare isEnding: boolean;
  declare endingType: 'VICTORY' | 'DEFEAT' | 'NEUTRAL' | null;
  declare rewardXp: number;
  declare rewardGold: number;
  declare createdAt: Date;
  declare updatedAt: Date;
}

export function initFamilyStoryNode(sequelize: Sequelize) {
  FamilyStoryNode.init(
    {
      id: {
        type: DataTypes.STRING(36),
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      adventureId: {
        type: DataTypes.STRING(36),
        allowNull: false,
      },
      nodeId: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING(150),
        allowNull: false,
      },
      narration: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      speakerName: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      speakerAvatar: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      bgImageUrl: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      isEnding: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      endingType: {
        type: DataTypes.ENUM('VICTORY', 'DEFEAT', 'NEUTRAL'),
        allowNull: true,
      },
      rewardXp: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      rewardGold: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
    },
    {
      sequelize,
      modelName: 'FamilyStoryNode',
      tableName: 'family_story_nodes',
      timestamps: true,
    }
  );
  return FamilyStoryNode;
}
