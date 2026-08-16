import { Model, DataTypes, Sequelize } from 'sequelize';

export class CreationPackage extends Model {
  declare id: string;
  declare name: string;
  declare description: string;
  declare packageType: 'PROFESSION' | 'BACKGROUND_BUNDLE' | 'PREDATOR_CHOICE';

  declare createdAt: Date;
  declare updatedAt: Date;
}

export function initCreationPackage(sequelize: Sequelize) {
  CreationPackage.init(
    {
      id: {
        type: DataTypes.STRING(36),
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      packageType: {
        type: DataTypes.ENUM('PROFESSION', 'BACKGROUND_BUNDLE', 'PREDATOR_CHOICE'),
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'CreationPackage',
      freezeTableName: true,
      timestamps: true,
    }
  );
  return CreationPackage;
}
