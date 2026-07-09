import { Model, DataTypes, Sequelize } from 'sequelize';

export class VampirePredatorDefinition extends Model {
  public id!: string;
  public nome!: string;
  public descricao!: string;
  public restricao_clas!: any;
  public reserva_dados!: any;
  public especializacoes_opcoes!: any;
  public disciplinas_bonus!: any;
  public modificador_humanidade!: number;
  public vantagens_ganhas!: any;
  public defeitos_ganhos!: any;
}

export const initVampirePredatorDefinition = (sequelize: Sequelize) => {
  VampirePredatorDefinition.init(
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      nome: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      descricao: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      restricao_clas: {
        type: DataTypes.JSON,
        allowNull: true,
        defaultValue: [],
      },
      reserva_dados: {
        type: DataTypes.JSON,
        allowNull: true,
        defaultValue: [],
      },
      especializacoes_opcoes: {
        type: DataTypes.JSON,
        allowNull: true,
        defaultValue: [],
      },
      disciplinas_bonus: {
        type: DataTypes.JSON,
        allowNull: true,
        defaultValue: [],
      },
      modificador_humanidade: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      vantagens_ganhas: {
        type: DataTypes.JSON,
        allowNull: true,
        defaultValue: [],
      },
      defeitos_ganhos: {
        type: DataTypes.JSON,
        allowNull: true,
        defaultValue: [],
      },
    },
    {
      sequelize,
      tableName: 'vampire_predator_definitions',
    }
  );
};
