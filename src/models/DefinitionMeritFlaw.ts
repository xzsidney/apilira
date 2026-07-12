import { Model, DataTypes, Sequelize } from 'sequelize';

export class DefinitionMeritFlaw extends Model {
  declare id: string;
  declare name: string;
  declare description: string;
  declare type: 'QUALIDADE' | 'DEFEITO';
  declare category: 'FISICO' | 'SOCIAL' | 'MENTAL' | 'SOBRENATURAL';
  declare cost: number;
  declare gameStyle: 'TODOS' | 'VAMPIRE' | 'WEREWOLF' | 'MAGE' | 'HUNTER';
  declare createdAt: Date;
  declare updatedAt: Date;
}

export function initDefinitionMeritFlaw(sequelize: Sequelize) {
  DefinitionMeritFlaw.init(
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
        type: DataTypes.ENUM('QUALIDADE', 'DEFEITO'),
        allowNull: false,
      },
      category: {
        type: DataTypes.ENUM('FISICO', 'SOCIAL', 'MENTAL', 'SOBRENATURAL'),
        allowNull: false,
      },
      cost: {
        type: DataTypes.INTEGER,
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
      tableName: 'DefinitionMeritFlaw',
      freezeTableName: true,
      timestamps: true,
    }
  );
  return DefinitionMeritFlaw;
}
