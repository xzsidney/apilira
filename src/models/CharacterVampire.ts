import { Model, DataTypes, Sequelize } from 'sequelize';

export class CharacterVampire extends Model {
  declare id: string;
  declare userId: string; // Ficha pertence a um usuário

  // Referências Diretas (FKs para Bibliotecas)
  declare clanId: string | null;
  declare predatorId: string | null;
  declare resonanceId: string | null;
  declare bloodPotencyId: string | null;

  // Textos e Identidade
  declare name: string;
  declare concept: string | null;
  declare chronicle: string | null;
  declare ambition: string | null;
  declare sire: string | null;
  declare desire: string | null;

  // Estatísticas Fixas
  declare generation: number;
  declare hunger: number;
  declare humanity: number;
  declare stains: number;

  // Trilhas de Dano (Vitalidade e Força de Vontade)
  declare healthMax: number;
  declare healthDamageSuperficial: number;
  declare healthDamageAggravated: number;
  
  declare willpowerMax: number;
  declare willpowerDamageSuperficial: number;
  declare willpowerDamageAggravated: number;

  // Filosofia (JSON ou Text)
  declare chronicleTenets: string | null;
  declare touchstones: any | null; // Array de objetos JSON
  declare convictions: any | null; // Array de strings JSON

  // Lore e Cosméticos
  declare trueAge: number | null;
  declare apparentAge: number | null;
  declare dateOfBirth: Date | null;
  declare dateOfDeath: Date | null;
  declare appearance: string | null;
  declare distinguishingFeatures: string | null;
  declare history: string | null;

  // XP
  declare experienceTotal: number;
  declare experienceSpent: number;

  declare createdAt: Date;
  declare updatedAt: Date;
}

export function initCharacterVampire(sequelize: Sequelize) {
  CharacterVampire.init(
    {
      id: {
        type: DataTypes.STRING(36),
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      userId: {
        type: DataTypes.STRING(36),
        allowNull: false,
        references: { model: 'User', key: 'id' },
        onDelete: 'CASCADE',
      },
      clanId: {
        type: DataTypes.STRING(36),
        allowNull: true,
        references: { model: 'DefinitionClan', key: 'id' },
        onDelete: 'SET NULL',
      },
      predatorId: {
        type: DataTypes.STRING(36),
        allowNull: true,
        references: { model: 'DefinitionPredator', key: 'id' },
        onDelete: 'SET NULL',
      },
      resonanceId: {
        type: DataTypes.STRING(36),
        allowNull: true,
        references: { model: 'DefinitionResonance', key: 'id' },
        onDelete: 'SET NULL',
      },
      bloodPotencyId: {
        type: DataTypes.STRING(36),
        allowNull: true,
        references: { model: 'DefinitionBloodPotency', key: 'id' },
        onDelete: 'SET NULL',
      },
      name: { type: DataTypes.STRING, allowNull: false },
      concept: { type: DataTypes.STRING, allowNull: true },
      chronicle: { type: DataTypes.STRING, allowNull: true },
      ambition: { type: DataTypes.STRING, allowNull: true },
      sire: { type: DataTypes.STRING, allowNull: true },
      desire: { type: DataTypes.STRING, allowNull: true },

      generation: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 12 },
      hunger: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 1 },
      humanity: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 7 },
      stains: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },

      healthMax: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 3 },
      healthDamageSuperficial: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
      healthDamageAggravated: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
      
      willpowerMax: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 3 },
      willpowerDamageSuperficial: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
      willpowerDamageAggravated: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },

      chronicleTenets: { type: DataTypes.TEXT, allowNull: true },
      touchstones: { type: DataTypes.JSON, allowNull: true },
      convictions: { type: DataTypes.JSON, allowNull: true },

      trueAge: { type: DataTypes.INTEGER, allowNull: true },
      apparentAge: { type: DataTypes.INTEGER, allowNull: true },
      dateOfBirth: { type: DataTypes.DATEONLY, allowNull: true },
      dateOfDeath: { type: DataTypes.DATEONLY, allowNull: true },
      appearance: { type: DataTypes.TEXT, allowNull: true },
      distinguishingFeatures: { type: DataTypes.TEXT, allowNull: true },
      history: { type: DataTypes.TEXT, allowNull: true },

      experienceTotal: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
      experienceSpent: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
    },
    {
      sequelize,
      tableName: 'CharacterVampire',
      freezeTableName: true,
      timestamps: true,
    }
  );
  return CharacterVampire;
}
