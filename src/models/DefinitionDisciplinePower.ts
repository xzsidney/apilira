import { Model, DataTypes, Sequelize } from 'sequelize';

export class DefinitionDisciplinePower extends Model {
  declare id: string;
  declare definitionDisciplineId: string;
  declare name: string;
  declare level: number;
  declare description: string;
  declare costType: string;
  declare costAmount: number;
  declare duration: string | null;
  declare dicePool: string | null;
  declare systemNotes: string | null;
  declare gameStyle: 'VAMPIRE';
  declare createdAt: Date;
  declare updatedAt: Date;
}

export function initDefinitionDisciplinePower(sequelize: Sequelize) {
  DefinitionDisciplinePower.init(
    {
      id: {
        type: DataTypes.STRING(36),
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      definitionDisciplineId: {
        type: DataTypes.STRING(36),
        allowNull: false,
        references: {
          model: 'DefinitionDiscipline',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      level: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      costType: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'Livre', // Free, Rouse, Blood, Willpower
      },
      costAmount: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      duration: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      dicePool: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      systemNotes: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      gameStyle: {
        type: DataTypes.ENUM('VAMPIRE'),
        allowNull: false,
        defaultValue: 'VAMPIRE',
      },
    },
    {
      sequelize,
      tableName: 'DefinitionDisciplinePower',
      freezeTableName: true,
      timestamps: true,
    }
  );
  return DefinitionDisciplinePower;
}
