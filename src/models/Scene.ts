import { Model, DataTypes, Sequelize } from 'sequelize';

// Cena de uma aventura
export class Scene extends Model {
  declare id: string;
  declare sceneIdentifier: string;
  declare title: string;
  declare description: string;
  declare imageUrl: string | null;
  declare audioUrl: string | null;
  declare apiConsequences: object | null;
  declare createdAt: Date;
  declare updatedAt: Date;
}

export function initScene(sequelize: Sequelize) {
  Scene.init(
    {
      id: {
        type: DataTypes.STRING(36),
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      sceneIdentifier: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      imageUrl: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      audioUrl: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      apiConsequences: {
        type: DataTypes.JSON,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: 'Scene',
      freezeTableName: true,
      timestamps: true,
    }
  );
  return Scene;
}
