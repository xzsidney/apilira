import { Model, DataTypes, Sequelize } from 'sequelize';

export class FamilyBattleParticipant extends Model {
  declare id: string;
  declare battleId: string;
  declare characterId: string;
  declare turnOrder: number;
  declare isDefending: boolean;
  declare currentStatus: object | null;
  declare createdAt: Date;
  declare updatedAt: Date;
}

export function initFamilyBattleParticipant(sequelize: Sequelize) {
  FamilyBattleParticipant.init(
    {
      id: {
        type: DataTypes.STRING(36),
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      battleId: {
        type: DataTypes.STRING(36),
        allowNull: false,
      },
      characterId: {
        type: DataTypes.STRING(36),
        allowNull: false,
      },
      turnOrder: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      isDefending: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      currentStatus: {
        type: DataTypes.JSON,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: 'FamilyBattleParticipant',
      tableName: 'family_battle_participants',
      timestamps: true,
    }
  );
  return FamilyBattleParticipant;
}
