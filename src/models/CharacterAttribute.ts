import { Model, DataTypes, Sequelize } from 'sequelize';

// Atributos associados a um personagem
export class CharacterAttribute extends Model {
  declare id: string;
  declare characterId: string;
  declare attributeId: string;
  declare value: number;
  declare specialty: string | null;
  declare description: string | null;
}

export function initCharacterAttribute(sequelize: Sequelize) {
  CharacterAttribute.init(
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
      attributeId: {
        type: DataTypes.STRING(36),
        allowNull: false,
      },
      value: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
      specialty: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: 'CharacterAttribute',
      freezeTableName: true,
      timestamps: false,
      indexes: [
        {
          unique: true,
          fields: ['characterId', 'attributeId'],
        },
      ],
    }
  );
  return CharacterAttribute;
}
