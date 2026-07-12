import { Model, DataTypes, Sequelize } from 'sequelize';

export class DefinitionEquipment extends Model {
  declare id: string;
  declare name: string;
  declare description: string;
  declare type: 'ARMA_FOGO' | 'ARMA_BRANCA' | 'ARMA_ARREMESSO' | 'EXPLOSIVO' | 'ARMADURA' | 'OUTROS';
  declare damage: string | null;
  declare concealment: string | null;
  declare range: number | null;
  declare rateOfFire: number | null;
  declare clip: string | null;
  declare minimumStrength: number | null;
  declare armorLevel: number | null;
  declare armorPenalty: number | null;
  declare cost: string | null;
  declare gameStyle: 'TODOS' | 'VAMPIRE' | 'WEREWOLF' | 'MAGE' | 'HUNTER';
  declare createdAt: Date;
  declare updatedAt: Date;
}

export function initDefinitionEquipment(sequelize: Sequelize) {
  DefinitionEquipment.init(
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
        type: DataTypes.ENUM('ARMA_FOGO', 'ARMA_BRANCA', 'ARMA_ARREMESSO', 'EXPLOSIVO', 'ARMADURA', 'OUTROS'),
        allowNull: false,
      },
      damage: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      concealment: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      range: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      rateOfFire: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      clip: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      minimumStrength: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      armorLevel: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      armorPenalty: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      cost: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      gameStyle: {
        type: DataTypes.ENUM('TODOS', 'VAMPIRE', 'WEREWOLF', 'MAGE', 'HUNTER'),
        allowNull: false,
        defaultValue: 'TODOS',
      },
    },
    {
      sequelize,
      tableName: 'DefinitionEquipment',
      freezeTableName: true,
      timestamps: true,
    }
  );
  return DefinitionEquipment;
}
