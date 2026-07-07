import { PrismaClient } from "@prisma/client";
import { PrismaMysql } from "@prisma/adapter-mysql2";
import mysql from "mysql2/promise";

const connectionString = process.env.DATABASE_URL as string;
const pool = mysql.createPool(connectionString);
const adapter = new PrismaMysql(pool);
const prisma = new PrismaClient({ adapter });

export default prisma;
