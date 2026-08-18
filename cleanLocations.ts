import sequelize from './src/config/db';
import { DefinitionLocation } from './src/models/index';

async function clean() {
  try {
    await DefinitionLocation.destroy({ where: {}, truncate: true, cascade: true });
    console.log("Todos os dados da tabela DefinitionLocation foram apagados com sucesso.");
  } catch (err) {
    console.error("Erro ao apagar dados:", err);
  } finally {
    process.exit(0);
  }
}

clean();
