import { Model, DataTypes, Sequelize } from 'sequelize';

export class VampireResonanceDefinition extends Model {
  declare id: string;
  declare nome: string;
  declare humor_associado: string;
  declare descricao: string;
  declare disciplinas_amplificadas: any;
  declare exemplos_presas: any;
}

export const initVampireResonanceDefinition = (sequelize: Sequelize) => {
  VampireResonanceDefinition.init(
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      nome: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      humor_associado: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      descricao: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      disciplinas_amplificadas: {
        type: DataTypes.JSON,
        allowNull: true,
        defaultValue: [],
      },
      exemplos_presas: {
        type: DataTypes.JSON,
        allowNull: true,
        defaultValue: [],
      },
    },
    {
      sequelize,
      tableName: 'vampire_resonance_definitions',
    }
  );
};
