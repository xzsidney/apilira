import { Model, DataTypes, Sequelize } from 'sequelize';

// Tipo de criminalidade presente em uma região
export class Criminality extends Model {
  declare id: string;
  declare crimeType: string;
  declare severity: string;
  declare description: string | null;
}

export function initCriminality(sequelize: Sequelize) {
  Criminality.init(
    {
      id: {
        type: DataTypes.STRING(36),
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      crimeType: {
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
      tableName: 'Criminality',
      freezeTableName: true,
      timestamps: false,
    }
  );
  return Criminality;
}
