import { Model, DataTypes, Sequelize } from 'sequelize';

// Seleções específicas de nível de poder para um personagem
export class CharacterPowerSelection extends Model {
  declare id: string;
  declare characterPowerId: string;
  declare powerLevelDefinitionId: string;
}

export function initCharacterPowerSelection(sequelize: Sequelize) {
  CharacterPowerSelection.init(
    {
      id: {
        type: DataTypes.STRING(36),
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      characterPowerId: {
        type: DataTypes.STRING(36),
        allowNull: false,
      },
      powerLevelDefinitionId: {
        type: DataTypes.STRING(36),
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'CharacterPowerSelection',
      freezeTableName: true,
      timestamps: false,
      indexes: [
        {
          unique: true,
          fields: ['characterPowerId', 'powerLevelDefinitionId'],
        },
      ],
    }
  );
  return CharacterPowerSelection;
}
