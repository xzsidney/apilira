import { DataTypes, Model, Sequelize } from 'sequelize';

export class DefinitionLocation extends Model {
  declare id: string;
  declare name: string;
  declare description: string;
  declare level: number;
  declare parentId: string | null;
  declare attributes: any; // JSON
  declare gameStyle: string;
  declare readonly createdAt: Date;
  declare readonly updatedAt: Date;
}

export function initDefinitionLocation(sequelize: Sequelize) {
  DefinitionLocation.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      level: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      parentId: {
        type: DataTypes.UUID,
        allowNull: true,
      },
      attributes: {
        type: DataTypes.JSON,
        allowNull: true,
      },
      gameStyle: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'vampire',
      },
    },
    {
      sequelize,
      tableName: 'DefinitionLocation',
    }
  );
}
