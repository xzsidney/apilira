import { Model, DataTypes, Sequelize } from 'sequelize';

// Definição de qualidades e defeitos
export class MeritFlawDefinition extends Model {
  declare id: string;
  declare name: string;
  declare type: 'MERIT' | 'FLAW';
  declare gameStyle: string;
  declare points: number | null;
  declare category: string | null;
  declare apiEffect: object | null;
  declare description: string | null;
  declare createdAt: Date;
  declare updatedAt: Date;
}

export function initMeritFlawDefinition(sequelize: Sequelize) {
  MeritFlawDefinition.init(
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
        type: DataTypes.ENUM('MERIT', 'FLAW'),
        allowNull: false,
      },
      gameStyle: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      points: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      category: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      apiEffect: {
        type: DataTypes.JSON,
        allowNull: true,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: 'MeritFlawDefinition',
      freezeTableName: true,
      timestamps: true,
      indexes: [
        {
          unique: true,
          fields: ['name', 'gameStyle', 'type'],
        },
      ],
    }
  );
  return MeritFlawDefinition;
}
