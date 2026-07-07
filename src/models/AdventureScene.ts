import { Model, DataTypes, Sequelize } from 'sequelize';

// Relação entre aventura e cena (ordem de exibição)
export class AdventureScene extends Model {
  declare id: string;
  declare adventureId: string;
  declare sceneId: string;
  declare order: number;
}

export function initAdventureScene(sequelize: Sequelize) {
  AdventureScene.init(
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
      sceneId: {
        type: DataTypes.STRING(36),
        allowNull: false,
      },
      order: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
    },
    {
      sequelize,
      tableName: 'AdventureScene',
      freezeTableName: true,
      timestamps: false,
      indexes: [
        {
          unique: true,
          fields: ['adventureId', 'sceneId'],
        },
      ],
    }
  );
  return AdventureScene;
}
