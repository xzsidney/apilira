import { Model, DataTypes, Sequelize } from 'sequelize';

// Definição de habilidades disponíveis no sistema
export class SkillDefinition extends Model {
  declare id: string;
  declare name: string;
  declare type: string;
  declare description: string | null;
  declare createdAt: Date;
  declare updatedAt: Date;
}

export function initSkillDefinition(sequelize: Sequelize) {
  SkillDefinition.init(
    {
      id: {
        type: DataTypes.STRING(36),
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: 'SkillDefinition',
      freezeTableName: true,
      timestamps: true,
      indexes: [
        {
          unique: true,
          fields: ['name', 'type'],
        },
      ],
    }
  );
  return SkillDefinition;
}
