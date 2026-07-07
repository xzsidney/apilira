import { Model, DataTypes, Sequelize } from 'sequelize';

// Nível de riqueza de uma região
export class Wealth extends Model {
  declare id: string;
  declare wealthType: string;
  declare description: string | null;
}

export function initWealth(sequelize: Sequelize) {
  Wealth.init(
    {
      id: {
        type: DataTypes.STRING(36),
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      wealthType: {
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
      tableName: 'Wealth',
      freezeTableName: true,
      timestamps: false,
    }
  );
  return Wealth;
}
