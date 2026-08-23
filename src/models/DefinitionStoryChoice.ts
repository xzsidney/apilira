import { Model, DataTypes, Optional } from 'sequelize';
import sequelize from '../config/database';

export interface DefinitionStoryChoiceAttributes {
  id: string;
  nodeId: string;
  choiceText: string;
  attributeReq?: string;
  skillReq?: string;
  difficulty?: number;
  successNodeId?: string;
  failureNodeId?: string;
  customStyle?: string;
}

export interface DefinitionStoryChoiceCreationAttributes extends Optional<DefinitionStoryChoiceAttributes, 'id' | 'attributeReq' | 'skillReq' | 'difficulty' | 'successNodeId' | 'failureNodeId' | 'customStyle'> {}

class DefinitionStoryChoice extends Model<DefinitionStoryChoiceAttributes, DefinitionStoryChoiceCreationAttributes> implements DefinitionStoryChoiceAttributes {
  declare id: string;
  declare nodeId: string;
  declare choiceText: string;
  declare attributeReq?: string;
  declare skillReq?: string;
  declare difficulty?: number;
  declare successNodeId?: string;
  declare failureNodeId?: string;
  declare customStyle?: string;
}

DefinitionStoryChoice.init(
  {
    id: {
      type: DataTypes.STRING(36),
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    nodeId: {
      type: DataTypes.STRING(36),
      allowNull: false,
    },
    choiceText: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    attributeReq: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    skillReq: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    difficulty: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    successNodeId: {
      type: DataTypes.STRING(36),
      allowNull: true,
    },
    failureNodeId: {
      type: DataTypes.STRING(36),
      allowNull: true,
    },
    customStyle: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'DefinitionStoryChoice',
    tableName: 'definition_story_choices',
    timestamps: true,
  }
);

export default DefinitionStoryChoice;
