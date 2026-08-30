import { Model, DataTypes, Sequelize } from 'sequelize';

export class FamilyStoryChoice extends Model {
  declare id: string;
  declare nodeRecordId: string;
  declare text: string;
  declare targetNodeId: string;
  declare testAttribute: string | null;
  declare difficulty: number;
  declare successNodeId: string | null;
  declare failureNodeId: string | null;
  declare orderIndex: number;
  declare createdAt: Date;
  declare updatedAt: Date;
}

export function initFamilyStoryChoice(sequelize: Sequelize) {
  FamilyStoryChoice.init(
    {
      id: {
        type: DataTypes.STRING(36),
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      nodeRecordId: {
        type: DataTypes.STRING(36),
        allowNull: false,
      },
      text: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      targetNodeId: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      testAttribute: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      difficulty: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      successNodeId: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      failureNodeId: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      orderIndex: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
    },
    {
      sequelize,
      modelName: 'FamilyStoryChoice',
      tableName: 'family_story_choices',
      timestamps: true,
    }
  );
  return FamilyStoryChoice;
}
