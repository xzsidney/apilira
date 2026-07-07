import { Model, DataTypes, Sequelize } from 'sequelize';

// Visibilidade midiática de uma região
export class MediaVisibility extends Model {
  declare id: string;
  declare mediaType: string;
  declare severity: string;
  declare description: string | null;
}

export function initMediaVisibility(sequelize: Sequelize) {
  MediaVisibility.init(
    {
      id: {
        type: DataTypes.STRING(36),
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      mediaType: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      severity: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: 'MediaVisibility',
      freezeTableName: true,
      timestamps: false,
    }
  );
  return MediaVisibility;
}
