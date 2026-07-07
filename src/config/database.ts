import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const databaseUrl = process.env.DATABASE_URL || "";

// Parse the DATABASE_URL to extract connection parameters
// Format: mysql://user:password@host:port/database
let sequelize: Sequelize;

if (databaseUrl) {
  const url = new URL(databaseUrl);
  sequelize = new Sequelize(
    url.pathname.slice(1), // database name (remove leading /)
    url.username,
    decodeURIComponent(url.password),
    {
      host: url.hostname,
      port: parseInt(url.port || "3306"),
      dialect: "mysql",
      logging: false, // Desativa logs SQL no console (ative com console.log para debug)
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
      },
      define: {
        timestamps: true,
        underscored: false, // Mantém camelCase como no Prisma original
      },
    }
  );
} else {
  // Fallback para desenvolvimento local sem DATABASE_URL
  sequelize = new Sequelize("lirarpg", "root", "", {
    host: "localhost",
    port: 3306,
    dialect: "mysql",
    logging: false,
  });
}

export default sequelize;
