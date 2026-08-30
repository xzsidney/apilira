import { Model, DataTypes, Sequelize } from 'sequelize';

export class FamilyLocation extends Model {
  declare id: string;
  declare name: string;
  declare category: 'HOUSE' | 'NEIGHBORHOOD' | 'SPECIAL';
  declare description: string;
  declare icon: string;
  declare bgImageUrl: string;
  declare orderIndex: number;
  declare isUnlocked: boolean;
  declare createdAt: Date;
  declare updatedAt: Date;
}

export function initFamilyLocation(sequelize: Sequelize) {
  FamilyLocation.init(
    {
      id: {
        type: DataTypes.STRING(36),
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      category: {
        type: DataTypes.ENUM('HOUSE', 'NEIGHBORHOOD', 'SPECIAL'),
        allowNull: false,
        defaultValue: 'HOUSE',
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      icon: {
        type: DataTypes.STRING(50),
        allowNull: false,
        defaultValue: '🏠',
      },
      bgImageUrl: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      orderIndex: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      isUnlocked: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
    },
    {
      sequelize,
      modelName: 'FamilyLocation',
      tableName: 'family_locations',
      timestamps: true,
    }
  );
  return FamilyLocation;
}
