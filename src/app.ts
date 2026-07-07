import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import helmet from "helmet";
import path from "path";
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

// Workaround for Hostinger/Phusion Passenger freezing Node.js and causing Prisma panics
app.use((req: Request, res: Response, next: NextFunction) => {
  const originalJson = res.json;
  res.json = function (body) {
    try {
      const bodyString = JSON.stringify(body);
      if (bodyString.includes("timer has gone away") || bodyString.includes("Query engine exited with code")) {
        console.error("FATAL: Prisma Engine Panic Detected! Forcing Node.js restart to recover...");
        // Schedule a process exit so Passenger restarts the app with a fresh Prisma instance
        setTimeout(() => process.exit(1), 100);
      }
    } catch (e) {
      // ignore stringify errors
    }
    return originalJson.call(this, body);
  };
  next();
});

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

// Rota manual para forçar o reinício da API (Útil para recuperar o Prisma)
app.get("/resetQA", (req: Request, res: Response) => {
  console.log("Reinício manual solicitado via /resetQA");
  
  let resultMessage = "Comando de restart enviado.";
  let errorDetails = null;

  // Tenta tocar o arquivo restart.txt padrão do Phusion Passenger
  try {
    const fs = require('fs');
    const path = require('path');
    const restartFile = path.join(__dirname, '../../tmp/restart.txt');
    if (!fs.existsSync(path.dirname(restartFile))) {
      fs.mkdirSync(path.dirname(restartFile), { recursive: true });
    }
    fs.writeFileSync(restartFile, new Date().toISOString());
    resultMessage = "Arquivo tmp/restart.txt atualizado com sucesso. O Phusion Passenger vai reiniciar a aplicação.";
  } catch (e: any) {
    errorDetails = e.message || String(e);
    resultMessage = "Falha ao criar o arquivo tmp/restart.txt. Usando apenas process.exit(1).";
  }

  res.json({ 
    status: errorDetails ? "warning" : "success",
    message: resultMessage, 
    error: errorDetails,
    action: "O processo será morto (process.exit) em 1 segundo para forçar reinício."
  });

  // Força a saída do processo
  setTimeout(() => process.exit(1), 1000);
});

// Global Error Handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error("Erro global capturado:", err);
  res.status(500).json({ error: "Erro interno no servidor" });
});

export default app;
