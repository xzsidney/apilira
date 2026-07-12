import { Model, DataTypes, Sequelize } from 'sequelize';

export class DefinitionArchetype extends Model {
  declare id: string;
  declare name: string;
  declare description: string;
  declare gameStyle: 'TODOS' | 'VAMPIRE' | 'WEREWOLF' | 'MAGE' | 'HUNTER';
  declare createdAt: Date;
  declare updatedAt: Date;
}

export function initDefinitionArchetype(sequelize: Sequelize) {
  DefinitionArchetype.init(
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
      gameStyle: {
        type: DataTypes.ENUM('TODOS', 'VAMPIRE', 'WEREWOLF', 'MAGE', 'HUNTER'),
        allowNull: false,
        defaultValue: 'TODOS',
      },
    },
    {
      sequelize,
      tableName: 'DefinitionArchetype',
      freezeTableName: true,
      timestamps: true,
    }
  );
  return DefinitionArchetype;
}
