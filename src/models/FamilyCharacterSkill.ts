import { Model, DataTypes, Sequelize } from 'sequelize';

export class FamilyCharacterSkill extends Model {
  declare id: string;
  declare characterId: string;
  declare skillId: string;
  declare unlockedAt: Date;
  declare isEquipped: boolean;
  declare createdAt: Date;
  declare updatedAt: Date;
}

export function initFamilyCharacterSkill(sequelize: Sequelize) {
  FamilyCharacterSkill.init(
    {
      id: {
        type: DataTypes.STRING(36),
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      characterId: {
        type: DataTypes.STRING(36),
        allowNull: false,
      },
      skillId: {
        type: DataTypes.STRING(36),
        allowNull: false,
      },
      unlockedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      isEquipped: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    {
      sequelize,
      modelName: 'FamilyCharacterSkill',
      tableName: 'family_character_skills',
      timestamps: true,
    }
  );
  return FamilyCharacterSkill;
}
