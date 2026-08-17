import { DataTypes, Model, Sequelize } from 'sequelize';

export class DefinitionLocation extends Model {
  public id!: string;
  public name!: string;
  public description!: string;
  public level!: number;
  public parentId!: string | null;
  public attributes!: object; // JSON
  public gameStyle!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
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
