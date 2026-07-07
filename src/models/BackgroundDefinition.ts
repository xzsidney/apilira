import { Model, DataTypes, Sequelize } from 'sequelize';

// Definição de antecedentes (backgrounds) por estilo de jogo
export class BackgroundDefinition extends Model {
  declare id: string;
  declare name: string;
  declare gameStyle: string;
  declare description: string | null;
  declare createdAt: Date;
  declare updatedAt: Date;
}

export function initBackgroundDefinition(sequelize: Sequelize) {
  BackgroundDefinition.init(
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
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: 'BackgroundDefinition',
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
  return BackgroundDefinition;
}
