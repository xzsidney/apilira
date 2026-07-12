import { Model, DataTypes, Sequelize } from 'sequelize';

export class DefinitionSkill extends Model {
  declare id: string;
  declare name: string;
  declare description: string;
  declare type: 'TALENTOS' | 'PERICIAS' | 'CONHECIMENTOS';
  declare gameStyle: 'TODOS' | 'VAMPIRE' | 'WEREWOLF' | 'MAGE' | 'HUNTER';
  declare createdAt: Date;
  declare updatedAt: Date;
}

export function initDefinitionSkill(sequelize: Sequelize) {
  DefinitionSkill.init(
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
        type: DataTypes.ENUM('TALENTOS', 'PERICIAS', 'CONHECIMENTOS'),
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
      tableName: 'DefinitionSkill',
      freezeTableName: true,
      timestamps: true,
    }
  );
  return DefinitionSkill;
}
