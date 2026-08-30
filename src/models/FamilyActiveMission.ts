import { Model, DataTypes, Sequelize } from 'sequelize';

export class FamilyActiveMission extends Model {
  declare id: string;
  declare characterId: string;
  declare taskId: string | null;
  declare title: string;
  declare category: string;
  declare durationMinutes: number;
  declare startedAt: Date;
  declare endsAt: Date;
  declare status: 'IN_PROGRESS' | 'COMPLETED' | 'CANCELLED';
  declare rewardXp: number;
  declare rewardGold: number;
  declare focusScore: number;
  declare stages: any;
  declare createdAt: Date;
  declare updatedAt: Date;
}

export function initFamilyActiveMission(sequelize: Sequelize) {
  FamilyActiveMission.init(
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
      taskId: {
        type: DataTypes.STRING(36),
        allowNull: true,
      },
      title: {
        type: DataTypes.STRING(150),
        allowNull: false,
      },
      category: {
        type: DataTypes.STRING(50),
        allowNull: false,
        defaultValue: 'STUDY',
      },
      durationMinutes: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 15,
      },
      startedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      endsAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM('IN_PROGRESS', 'COMPLETED', 'CANCELLED'),
        allowNull: false,
        defaultValue: 'IN_PROGRESS',
      },
      rewardXp: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 50,
      },
      rewardGold: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 15,
      },
      focusScore: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 100,
      },
      stages: {
        type: DataTypes.JSON,
        allowNull: true,
        defaultValue: [],
      },
    },
    {
      sequelize,
      modelName: 'FamilyActiveMission',
      tableName: 'family_active_missions',
      timestamps: true,
    }
  );
  return FamilyActiveMission;
}
