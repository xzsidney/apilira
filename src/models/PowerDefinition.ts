import { Model, DataTypes, Sequelize } from 'sequelize';

// Definição de poderes sobrenaturais (Disciplinas, Dons, Esferas, Edges)
export class PowerDefinition extends Model {
  declare id: string;
  declare name: string;
  declare gameStyle: string;
  declare type: 'DISCIPLINE' | 'GIFT' | 'SPHERE' | 'EDGE';
  declare description: string | null;
  declare createdAt: Date;
  declare updatedAt: Date;
}

export function initPowerDefinition(sequelize: Sequelize) {
  PowerDefinition.init(
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
      gameStyle: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      type: {
        type: DataTypes.ENUM('DISCIPLINE', 'GIFT', 'SPHERE', 'EDGE'),
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: 'PowerDefinition',
      freezeTableName: true,
      timestamps: true,
      indexes: [
        {
          unique: true,
          fields: ['name', 'gameStyle'],
        },
      ],
    }
  );
  return PowerDefinition;
}
