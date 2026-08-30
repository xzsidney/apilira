import { Model, DataTypes, Sequelize } from 'sequelize';

export class FamilyTask extends Model {
  declare id: string;
  declare title: string;
  declare description: string;
  declare category: 'CHORE' | 'STUDY' | 'VIRTUE' | 'HEALTH';
  declare rewardXp: number;
  declare rewardGold: number;
  declare icon: string;
  declare cooldownHours: number;
  declare isActive: boolean;
  declare createdAt: Date;
  declare updatedAt: Date;
}

export function initFamilyTask(sequelize: Sequelize) {
  FamilyTask.init(
    {
      id: {
        type: DataTypes.STRING(36),
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      title: {
        type: DataTypes.STRING(150),
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      category: {
        type: DataTypes.ENUM('CHORE', 'STUDY', 'VIRTUE', 'HEALTH'),
        allowNull: false,
        defaultValue: 'CHORE',
      },
      rewardXp: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 50,
      },
      rewardGold: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 10,
      },
      icon: {
        type: DataTypes.STRING(50),
        allowNull: false,
        defaultValue: '🍽️',
      },
      cooldownHours: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 24,
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
    },
    {
      sequelize,
      modelName: 'FamilyTask',
      tableName: 'family_tasks',
      timestamps: true,
    }
  );
  return FamilyTask;
}
