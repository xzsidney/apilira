// Arquivo de compatibilidade — exporta a instância do Sequelize
// Anteriormente exportava o PrismaClient, agora exporta o Sequelize
import sequelize from "./database";

export default sequelize;
