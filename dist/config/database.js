"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const databaseUrl = process.env.DATABASE_URL || "";
// Parse the DATABASE_URL to extract connection parameters
// Format: mysql://user:password@host:port/database
let sequelize;
if (databaseUrl) {
    const url = new URL(databaseUrl);
    sequelize = new sequelize_1.Sequelize(url.pathname.slice(1), // database name (remove leading /)
    url.username, decodeURIComponent(url.password), {
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
    });
}
else {
    // Fallback para desenvolvimento local sem DATABASE_URL
    sequelize = new sequelize_1.Sequelize("lirarpg", "root", "", {
        host: "localhost",
        port: 3306,
        dialect: "mysql",
        logging: false,
    });
}
exports.default = sequelize;
