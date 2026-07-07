import { Model, DataTypes, Sequelize } from 'sequelize';

// Modelo de Personagem (jogável ou NPC)
export class Character extends Model {
  declare id: string;
  declare name: string;
  declare gameStyle: 'VAMPIRE' | 'WEREWOLF' | 'MAGE' | 'HUNTER';
  declare experienceTotal: number;
  declare experienceSpent: number;
  declare isNpc: boolean;
  declare isTemplate: boolean;
  declare userId: string;
  declare avatarUrl: string | null;
  declare createdAt: Date;
  declare updatedAt: Date;
}

export function initCharacter(sequelize: Sequelize) {
  Character.init(
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
      gameStyle: {
        type: DataTypes.ENUM('VAMPIRE', 'WEREWOLF', 'MAGE', 'HUNTER'),
        allowNull: false,
      },
      experienceTotal: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      experienceSpent: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      isNpc: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      isTemplate: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      userId: {
        type: DataTypes.STRING(36),
        allowNull: false,
      },
      avatarUrl: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: 'Character',
      freezeTableName: true,
      timestamps: true,
    }
  );
  return Character;
}
