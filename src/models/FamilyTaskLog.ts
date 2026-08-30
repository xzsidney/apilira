import { Model, DataTypes, Sequelize } from 'sequelize';

export class FamilyTaskLog extends Model {
  declare id: string;
  declare characterId: string;
  declare taskId: string;
  declare status: 'PENDING_APPROVAL' | 'APPROVED' | 'REJECTED';
  declare requestedAt: Date;
  declare approvedAt: Date | null;
  declare approvedByUserId: string | null;
  declare notes: string | null;
  declare createdAt: Date;
  declare updatedAt: Date;
}

export function initFamilyTaskLog(sequelize: Sequelize) {
  FamilyTaskLog.init(
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
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM('PENDING_APPROVAL', 'APPROVED', 'REJECTED'),
        allowNull: false,
        defaultValue: 'PENDING_APPROVAL',
      },
      requestedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      approvedAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      approvedByUserId: {
        type: DataTypes.STRING(36),
        allowNull: true,
      },
      notes: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: 'FamilyTaskLog',
      tableName: 'family_task_logs',
      timestamps: true,
    }
  );
  return FamilyTaskLog;
}
