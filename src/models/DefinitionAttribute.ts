import { Model, DataTypes, Sequelize } from 'sequelize';

export class DefinitionAttribute extends Model {
  declare id: string;
  declare name: string;
  declare description: string;
  declare type: 'FISICO' | 'SOCIAL' | 'MENTAL';
  declare gameStyle: 'TODOS' | 'VAMPIRE' | 'WEREWOLF' | 'MAGE' | 'HUNTER';
  declare createdAt: Date;
  declare updatedAt: Date;
}

export function initDefinitionAttribute(sequelize: Sequelize) {
  DefinitionAttribute.init(
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
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      type: {
        type: DataTypes.ENUM('FISICO', 'SOCIAL', 'MENTAL'),
        allowNull: false,
      },
      gameStyle: {
        type: DataTypes.ENUM('TODOS', 'VAMPIRE', 'WEREWOLF', 'MAGE', 'HUNTER'),
        allowNull: false,
        defaultValue: 'TODOS',
      },
    },
    {
      sequelize,
      tableName: 'DefinitionAttribute',
      freezeTableName: true,
      timestamps: true,
    }
  );
  return DefinitionAttribute;
}
