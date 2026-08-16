import { Model, DataTypes, Sequelize } from 'sequelize';

export class CreationPackageItem extends Model {
  declare id: string;
  declare packageId: string;
  declare itemType: 'ATTRIBUTE' | 'SKILL' | 'BACKGROUND' | 'MERIT' | 'FLAW' | 'CLAN_ALLOWED' | 'CLAN_RESTRICTION' | 'PREDATOR';
  declare referenceId: string; // UUID of the item in the Definition table
  declare amount: number;

  declare createdAt: Date;
  declare updatedAt: Date;
}

export function initCreationPackageItem(sequelize: Sequelize) {
  CreationPackageItem.init(
    {
      id: {
        type: DataTypes.STRING(36),
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      packageId: {
        type: DataTypes.STRING(36),
        allowNull: false,
        references: {
          model: 'CreationPackage',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      itemType: {
        type: DataTypes.ENUM(
          'ATTRIBUTE', 
          'SKILL', 
          'BACKGROUND', 
          'MERIT', 
          'FLAW', 
          'CLAN_ALLOWED', 
          'CLAN_RESTRICTION', 
          'PREDATOR'
        ),
        allowNull: false,
      },
      referenceId: {
        type: DataTypes.STRING(36),
        allowNull: false,
        comment: 'UUID da biblioteca correspondente (Ex: ID da DefinitionAttribute)'
      },
      amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
        comment: 'Quantidade concedida ou exigida'
      },
    },
    {
      sequelize,
      tableName: 'CreationPackageItem',
      freezeTableName: true,
      timestamps: true,
    }
  );
  return CreationPackageItem;
}
