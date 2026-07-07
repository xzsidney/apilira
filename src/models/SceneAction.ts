import { Model, DataTypes, Sequelize } from 'sequelize';

// Relação entre cena e ação, com cenas de sucesso e falha
export class SceneAction extends Model {
  declare id: string;
  declare sceneId: string;
  declare actionId: string;
  declare successSceneId: string | null;
  declare failureSceneId: string | null;
  declare order: number;
}

export function initSceneAction(sequelize: Sequelize) {
  SceneAction.init(
    {
      id: {
        type: DataTypes.STRING(36),
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      sceneId: {
        type: DataTypes.STRING(36),
        allowNull: false,
      },
      actionId: {
        type: DataTypes.STRING(36),
        allowNull: false,
      },
      successSceneId: {
        type: DataTypes.STRING(36),
        allowNull: true,
      },
      failureSceneId: {
        type: DataTypes.STRING(36),
        allowNull: true,
      },
      order: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
    },
    {
      sequelize,
      tableName: 'SceneAction',
      freezeTableName: true,
      timestamps: false,
      indexes: [
        {
          unique: true,
          fields: ['sceneId', 'actionId'],
        },
      ],
    }
  );
  return SceneAction;
}
