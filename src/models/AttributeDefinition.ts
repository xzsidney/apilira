import { Model, DataTypes, Sequelize } from 'sequelize';

// Definição de atributos disponíveis no sistema
export class AttributeDefinition extends Model {
  declare id: string;
  declare name: string;
  declare type: string;
  declare description: string | null;
  declare gameStyle: object | null;
  declare createdAt: Date;
  declare updatedAt: Date;
}

export function initAttributeDefinition(sequelize: Sequelize) {
  AttributeDefinition.init(
    {
      id: {
        type: DataTypes.STRING(36),
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      gameStyle: {
        type: DataTypes.JSON,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: 'AttributeDefinition',
      freezeTableName: true,
      timestamps: true,
      indexes: [
        {
          unique: true,
          fields: ['name', 'type'],
        },
      ],
    }
  );
  return AttributeDefinition;
}
