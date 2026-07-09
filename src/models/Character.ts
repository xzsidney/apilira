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
  
  // Text and Lore
  declare concept: string | null;
  declare nature: string | null;
  declare demeanor: string | null;
  declare chronicle: string | null;
  declare history: string | null;
  declare roleplayHints: string | null;

  // Pools
  declare health: number;
  declare maxHealth: number;
  declare willpower: number;
  declare maxWillpower: number;
  declare energy: number;
  declare maxEnergy: number;
  
  // Chaves Estrangeiras de Especialização
  declare vampireClaId: string | null;
  declare werewolfTribeId: string | null;
  declare mageTraditionId: string | null;
  declare hunterCreedId: string | null;
  declare vampirePredatorId: string | null;
  declare vampireResonanceId: string | null;
  declare vampireGeneration: number | null;
  declare vampireSire: string | null;
  declare vampireHunger: number | null;
  declare vampireAmbition: string | null;
  declare vampireDesire: string | null;

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
      vampirePredatorId: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      vampireResonanceId: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      vampireGeneration: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      vampireSire: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      vampireHunger: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 1,
      },
      vampireAmbition: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      vampireDesire: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      avatarUrl: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      concept: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      nature: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      demeanor: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      chronicle: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      history: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      roleplayHints: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      health: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 7,
      },
      maxHealth: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 7,
      },
      willpower: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
      maxWillpower: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
      energy: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
      maxEnergy: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
      vampireClaId: {
        type: DataTypes.STRING(36),
        allowNull: true,
      },
      werewolfTribeId: {
        type: DataTypes.STRING(36),
        allowNull: true,
      },
      mageTraditionId: {
        type: DataTypes.STRING(36),
        allowNull: true,
      },
      hunterCreedId: {
        type: DataTypes.STRING(36),
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
