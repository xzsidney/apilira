import { Model, DataTypes, Sequelize } from 'sequelize';

export class FamilyClassSkill extends Model {
  declare id: string;
  declare characterClass: string;
  declare tier: number; // 1 = Grau I, 2 = Grau II Plus, 3 = Grau III Mestre
  declare name: string;
  declare description: string;
  declare icon: string;
  declare costXp: number;
  declare requiredSkillId: string | null;
  declare effectType: string;
  declare power: number;
  declare costMp: number;
  declare orderIndex: number;
  declare createdAt: Date;
  declare updatedAt: Date;
}

export function initFamilyClassSkill(sequelize: Sequelize) {
  FamilyClassSkill.init(
    {
      id: {
        type: DataTypes.STRING(36),
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      characterClass: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      tier: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      icon: {
        type: DataTypes.STRING(50),
        allowNull: false,
        defaultValue: '⚡',
      },
      costXp: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 50,
      },
      requiredSkillId: {
        type: DataTypes.STRING(36),
        allowNull: true,
      },
      effectType: {
        type: DataTypes.STRING(50),
        allowNull: false,
        defaultValue: 'DAMAGE',
      },
      power: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 20,
      },
      costMp: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 10,
      },
      orderIndex: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
    },
    {
      sequelize,
      modelName: 'FamilyClassSkill',
      tableName: 'family_class_skills',
      timestamps: true,
    }
  );
  return FamilyClassSkill;
}
