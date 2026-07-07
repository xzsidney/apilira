import { Model, DataTypes, Sequelize } from 'sequelize';

// Perfil demográfico de uma região
export class DemographicProfile extends Model {
  declare id: string;
  declare species: string;
  declare socialClass: string;
  declare profession: string;
  declare description: string | null;
}

export function initDemographicProfile(sequelize: Sequelize) {
  DemographicProfile.init(
    {
      id: {
        type: DataTypes.STRING(36),
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      species: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      socialClass: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      profession: {
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
      tableName: 'DemographicProfile',
      freezeTableName: true,
      timestamps: false,
      indexes: [
        {
          unique: true,
          fields: ['species', 'socialClass', 'profession'],
        },
      ],
    }
  );
  return DemographicProfile;
}
