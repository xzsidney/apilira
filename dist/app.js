"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const path_1 = __importDefault(require("path"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const characterRoutes_1 = __importDefault(require("./routes/characterRoutes"));
const attributeDefinitionRoutes_1 = __importDefault(require("./routes/attributeDefinitionRoutes"));
const itemDefinitionRoutes_1 = __importDefault(require("./routes/itemDefinitionRoutes"));
const skillDefinitionRoutes_1 = __importDefault(require("./routes/skillDefinitionRoutes"));
const meritFlawDefinitionRoutes_1 = __importDefault(require("./routes/meritFlawDefinitionRoutes"));
const statusDefinitionRoutes_1 = __importDefault(require("./routes/statusDefinitionRoutes"));
const powerDefinitionRoutes_1 = __importDefault(require("./routes/powerDefinitionRoutes"));
const regionRoutes_1 = __importDefault(require("./routes/regionRoutes"));
const backgroundDefinitionRoutes_1 = __importDefault(require("./routes/backgroundDefinitionRoutes"));
const havenDefinitionRoutes_1 = __importDefault(require("./routes/havenDefinitionRoutes"));
const adventureRoutes_1 = __importDefault(require("./routes/adventureRoutes"));
const sceneRoutes_1 = __importDefault(require("./routes/sceneRoutes"));
const actionRoutes_1 = __importDefault(require("./routes/actionRoutes"));
const swagger_1 = require("./config/swagger");
const db_1 = __importDefault(require("./config/db"));
const sequelize_1 = require("sequelize");
const app = (0, express_1.default)();
// Security and utility middlewares
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)({
    origin: ["https://liragames.com.br", "https://www.liragames.com.br", "http://localhost:3000", "http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    credentials: true
}));
app.use(express_1.default.json());
// Configure Swagger documentation
if (process.env.NODE_ENV !== "production") {
    (0, swagger_1.setupSwagger)(app);
}
// Serve static files for uploaded images
app.use("/uploads", express_1.default.static(path_1.default.join(__dirname, "../public/uploads")));
// API Routes
app.use("/api/auth", authRoutes_1.default);
app.use("/api/characters", characterRoutes_1.default);
app.use("/api/attribute-definitions", attributeDefinitionRoutes_1.default);
app.use("/api/item-definitions", itemDefinitionRoutes_1.default);
app.use("/api/skill-definitions", skillDefinitionRoutes_1.default);
app.use("/api/merit-flaw-definitions", meritFlawDefinitionRoutes_1.default);
app.use("/api/status-definitions", statusDefinitionRoutes_1.default);
app.use("/api/power-definitions", powerDefinitionRoutes_1.default);
app.use("/api/regions", regionRoutes_1.default);
app.use("/api/background-definitions", backgroundDefinitionRoutes_1.default);
app.use("/api/haven-definitions", havenDefinitionRoutes_1.default);
app.use("/api/adventures", adventureRoutes_1.default);
app.use("/api/scenes", sceneRoutes_1.default);
app.use("/api/actions", actionRoutes_1.default);
// Base routes
app.get("/", (req, res) => {
    res.json({
        message: "LiraRPG API",
        version: "2.0.0",
        status: "online",
        description: "Servidor de backend para o sistema LiraRPG. (Sequelize)",
        engine: "Sequelize + MySQL2 (sem Prisma)"
    });
});
app.get("/health", (req, res) => {
    res.json({ status: "OK", timestamp: new Date() });
});
app.get("/teste", async (req, res) => {
    try {
        // Tenta executar uma query super leve no banco de dados
        await db_1.default.query("SELECT 1 AS result", { type: sequelize_1.QueryTypes.SELECT });
        res.json({
            status: "success",
            message: "Conexão com o banco de dados estabelecida com sucesso! (Sequelize)"
        });
    }
    catch (error) {
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
app.use((err, req, res, next) => {
    console.error("Erro global capturado:", err);
    res.status(500).json({ error: "Erro interno no servidor" });
});
exports.default = app;
