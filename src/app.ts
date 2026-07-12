import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import helmet from "helmet";
import path from "path";
import authRoutes from "./routes/authRoutes";
import { setupSwagger } from "./config/swagger";
import sequelize from "./config/db";
import { QueryTypes } from "sequelize";

const app = express();

// Security and utility middlewares
app.use(helmet());
app.use(cors({
  origin: ["https://liragames.com.br", "https://www.liragames.com.br", "http://localhost:3000", "http://localhost:5173"],
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  credentials: true
}));
app.use(express.json());

// Configure Swagger documentation
if (process.env.NODE_ENV !== "production") {
  setupSwagger(app);
}

// Serve static files for uploaded images
app.use("/uploads", express.static(path.join(__dirname, "../public/uploads")));

import definitionAttributeRoutes from "./routes/definitionAttributeRoutes";
import definitionSkillRoutes from "./routes/definitionSkillRoutes";
import definitionArchetypeRoutes from "./routes/definitionArchetypeRoutes";
import definitionMeritFlawRoutes from "./routes/definitionMeritFlawRoutes";
import definitionEquipmentRoutes from "./routes/definitionEquipmentRoutes";

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/definition-attributes", definitionAttributeRoutes);
app.use("/api/definition-skills", definitionSkillRoutes);
app.use("/api/definition-archetypes", definitionArchetypeRoutes);
app.use("/api/definition-merit-flaws", definitionMeritFlawRoutes);
app.use("/api/definition-equipments", definitionEquipmentRoutes);

// Base routes
app.get("/", (req: Request, res: Response) => {
  res.json({
    message: "LiraRPG API",
    version: "3.0.0",
    status: "online",
    description: "Servidor de backend limpo (apenas Autenticação)",
    engine: "Sequelize + MySQL2"
  });
});

app.get("/health", (req: Request, res: Response) => {
  res.json({ status: "OK", timestamp: new Date() });
});

app.get("/teste", async (req: Request, res: Response) => {
  try {
    await sequelize.query("SELECT 1 AS result", { type: QueryTypes.SELECT });
    res.json({ 
      status: "success", 
      message: "Conexão com o banco de dados estabelecida com sucesso! (Sequelize)" 
    });
  } catch (error: any) {
    console.error("Erro no teste de banco:", error);
    res.json({ 
      status: "error", 
      message: "Falha na conexão com o banco de dados.",
      details: error.message,
      stack: error.stack
    });
  }
});

// Global Error Handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error("Erro Global:", err.stack);
  res.status(500).json({ error: "Ocorreu um erro interno no servidor." });
});

export default app;
