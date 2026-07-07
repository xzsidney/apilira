import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import helmet from "helmet";
import authRoutes from "./routes/authRoutes";
import characterRoutes from "./routes/characterRoutes";
import attributeDefinitionRoutes from "./routes/attributeDefinitionRoutes";
import itemDefinitionRoutes from "./routes/itemDefinitionRoutes";
import skillDefinitionRoutes from "./routes/skillDefinitionRoutes";
import meritFlawDefinitionRoutes from "./routes/meritFlawDefinitionRoutes";
import statusDefinitionRoutes from "./routes/statusDefinitionRoutes";
import powerDefinitionRoutes from "./routes/powerDefinitionRoutes";
import regionRoutes from "./routes/regionRoutes";
import backgroundDefinitionRoutes from "./routes/backgroundDefinitionRoutes";
import havenDefinitionRoutes from "./routes/havenDefinitionRoutes";
import adventureRoutes from "./routes/adventureRoutes";
import sceneRoutes from "./routes/sceneRoutes";
import actionRoutes from "./routes/actionRoutes";
import { setupSwagger } from "./config/swagger";
import prisma from "./config/db";

const app = express();

// Security and utility middlewares
app.use(helmet());
app.use(cors());
app.use(express.json());

// Configure Swagger documentation
if (process.env.NODE_ENV !== "production") {
  setupSwagger(app);
}

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/characters", characterRoutes);
app.use("/api/attribute-definitions", attributeDefinitionRoutes);
app.use("/api/item-definitions", itemDefinitionRoutes);
app.use("/api/skill-definitions", skillDefinitionRoutes);
app.use("/api/merit-flaw-definitions", meritFlawDefinitionRoutes);
app.use("/api/status-definitions", statusDefinitionRoutes);
app.use("/api/power-definitions", powerDefinitionRoutes);
app.use("/api/regions", regionRoutes);
app.use("/api/background-definitions", backgroundDefinitionRoutes);
app.use("/api/haven-definitions", havenDefinitionRoutes);

app.use("/api/adventures", adventureRoutes);
app.use("/api/scenes", sceneRoutes);
app.use("/api/actions", actionRoutes);

// Base routes
app.get("/", (req: Request, res: Response) => {
  res.json({
    message: "LiraRPG API",
    version: "1.0.0",
    status: "online",
    description: "Servidor de backend para o sistema LiraRPG."
  });
});

app.get("/health", (req: Request, res: Response) => {
  res.json({ status: "OK", timestamp: new Date() });
});

app.get("/teste", async (req: Request, res: Response) => {
  try {
    // Tenta executar uma query super leve no banco de dados
    await prisma.$queryRaw`SELECT 1`;
    res.json({ 
      status: "success", 
      message: "Conexão com o banco de dados estabelecida com sucesso!" 
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
  console.error("Erro global capturado:", err);
  res.status(500).json({ error: "Erro interno no servidor" });
});

export default app;
