import { Model, DataTypes, Sequelize } from 'sequelize';

// Definição de itens disponíveis no jogo
export class ItemDefinition extends Model {
  declare id: string;
  declare name: string;
  declare description: string | null;
  declare damageOrEffect: string | null;
  declare concealment: string | null;
  declare availability: number | null;
  declare value: number;
  declare requirements: string | null;
  declare createdAt: Date;
  declare updatedAt: Date;
}

export function initItemDefinition(sequelize: Sequelize) {
  ItemDefinition.init(
    {
      id: {
        type: DataTypes.STRING(36),
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      damageOrEffect: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      concealment: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      availability: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      value: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0.0,
      },
      requirements: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: 'ItemDefinition',
      freezeTableName: true,
      timestamps: true,
    }
  );
  return ItemDefinition;
}
