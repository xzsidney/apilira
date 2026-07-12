import { Model, DataTypes, Sequelize } from 'sequelize';

export class DefinitionDiscipline extends Model {
  declare id: string;
  declare name: string;
  declare description: string;
  declare gameStyle: 'VAMPIRE';
  declare createdAt: Date;
  declare updatedAt: Date;
}

export function initDefinitionDiscipline(sequelize: Sequelize) {
  DefinitionDiscipline.init(
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
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      gameStyle: {
        type: DataTypes.ENUM('VAMPIRE'),
        allowNull: false,
        defaultValue: 'VAMPIRE',
      },
    },
    {
      sequelize,
      tableName: 'DefinitionDiscipline',
      freezeTableName: true,
      timestamps: true,
    }
  );
  return DefinitionDiscipline;
}
