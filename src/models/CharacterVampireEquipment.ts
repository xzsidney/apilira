import { Model, DataTypes, Sequelize } from 'sequelize';

export class CharacterVampireEquipment extends Model {
  declare characterVampireId: string;
  declare definitionEquipmentId: string;
  declare quantity: number;
  declare equipped: boolean;
}

export function initCharacterVampireEquipment(sequelize: Sequelize) {
  CharacterVampireEquipment.init(
    {
      characterVampireId: {
        type: DataTypes.STRING(36),
        primaryKey: true,
        references: { model: 'CharacterVampire', key: 'id' },
        onDelete: 'CASCADE',
      },
      definitionEquipmentId: {
        type: DataTypes.STRING(36),
        primaryKey: true,
        references: { model: 'DefinitionEquipment', key: 'id' },
        onDelete: 'CASCADE',
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
      equipped: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    {
      sequelize,
      tableName: 'CharacterVampireEquipment',
      freezeTableName: true,
      timestamps: false,
    }
  );
  return CharacterVampireEquipment;
}
