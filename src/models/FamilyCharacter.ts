import { Model, DataTypes, Sequelize } from 'sequelize';

export class FamilyCharacter extends Model {
  declare id: string;
  declare userId: string | null;
  declare name: string;
  declare characterClass: string;
  declare title: string;
  declare avatarUrl: string;
  declare level: number;
  declare currentXp: number;
  declare nextLevelXp: number;
  declare gold: number;
  declare hpCurrent: number;
  declare hpMax: number;
  declare mpCurrent: number;
  declare mpMax: number;
  declare strength: number;
  declare vitality: number;
  declare agility: number;
  declare wisdom: number;
  declare heartBond: number;
  declare equippedWeapon: string;
  declare equippedArmor: string;
  declare equippedPet: string | null;
  declare isParent: boolean;
  declare orderIndex: number;
  declare createdAt: Date;
  declare updatedAt: Date;
}

export function initFamilyCharacter(sequelize: Sequelize) {
  FamilyCharacter.init(
    {
      id: {
        type: DataTypes.STRING(36),
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      userId: {
        type: DataTypes.STRING(36),
        allowNull: true,
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      characterClass: {
        type: DataTypes.STRING(50),
        allowNull: false,
        defaultValue: 'GUERREIRO',
      },
      title: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      avatarUrl: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      level: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
      currentXp: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      nextLevelXp: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 100,
      },
      gold: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      hpCurrent: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 100,
      },
      hpMax: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 100,
      },
      mpCurrent: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 50,
      },
      mpMax: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 50,
      },
      strength: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 10,
      },
      vitality: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 10,
      },
      agility: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 10,
      },
      wisdom: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 10,
      },
      heartBond: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 10,
      },
      equippedWeapon: {
        type: DataTypes.STRING(100),
        allowNull: false,
        defaultValue: 'Espada de Madeira',
      },
      equippedArmor: {
        type: DataTypes.STRING(100),
        allowNull: false,
        defaultValue: 'Túnica de Linho',
      },
      equippedPet: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      isParent: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      orderIndex: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
    },
    {
      sequelize,
      modelName: 'FamilyCharacter',
      tableName: 'family_characters',
      timestamps: true,
    }
  );
  return FamilyCharacter;
}
