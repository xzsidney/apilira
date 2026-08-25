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
const swagger_1 = require("./config/swagger");
const db_1 = __importDefault(require("./config/db"));
const sequelize_1 = require("sequelize");
const app = (0, express_1.default)();
// Security and utility middlewares
app.use((0, helmet_1.default)({
    crossOriginResourcePolicy: { policy: "cross-origin" }
}));
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
// Permite usar uma pasta fora do Github (na Hostinger) se a variável estiver definida
const uploadDir = process.env.PERSISTENT_UPLOAD_DIR || path_1.default.join(__dirname, "../public/uploads");
app.use("/uploads", express_1.default.static(uploadDir));
const definitionAttributeRoutes_1 = __importDefault(require("./routes/definitionAttributeRoutes"));
const definitionSkillRoutes_1 = __importDefault(require("./routes/definitionSkillRoutes"));
const definitionArchetypeRoutes_1 = __importDefault(require("./routes/definitionArchetypeRoutes"));
const definitionMeritFlawRoutes_1 = __importDefault(require("./routes/definitionMeritFlawRoutes"));
const definitionEquipmentRoutes_1 = __importDefault(require("./routes/definitionEquipmentRoutes"));
const definitionBackgroundRoutes_1 = __importDefault(require("./routes/definitionBackgroundRoutes"));
const definitionClanRoutes_1 = __importDefault(require("./routes/definitionClanRoutes"));
const definitionPredatorRoutes_1 = __importDefault(require("./routes/definitionPredatorRoutes"));
const definitionResonanceRoutes_1 = __importDefault(require("./routes/definitionResonanceRoutes"));
const definitionDisciplineRoutes_1 = __importDefault(require("./routes/definitionDisciplineRoutes"));
const definitionBloodPotencyRoutes_1 = __importDefault(require("./routes/definitionBloodPotencyRoutes"));
const characterVampireRoutes_1 = __importDefault(require("./routes/characterVampireRoutes"));
const creationPackageRoutes_1 = __importDefault(require("./routes/creationPackageRoutes"));
const uploadRoutes_1 = __importDefault(require("./routes/uploadRoutes"));
const radarLocationRoutes_1 = __importDefault(require("./routes/radarLocationRoutes"));
const missionIdleRoutes_1 = __importDefault(require("./routes/missionIdleRoutes"));
const storyRoutes_1 = __importDefault(require("./routes/storyRoutes"));
const gmRoutes_1 = __importDefault(require("./routes/gmRoutes"));
const nightCycleRoutes_1 = __importDefault(require("./routes/nightCycleRoutes"));
// API Routes
app.use("/api/auth", authRoutes_1.default);
app.use("/api/gm", gmRoutes_1.default);
app.use("/api/definition-attributes", definitionAttributeRoutes_1.default);
app.use("/api/definition-skills", definitionSkillRoutes_1.default);
app.use("/api/definition-archetypes", definitionArchetypeRoutes_1.default);
app.use("/api/definition-merit-flaws", definitionMeritFlawRoutes_1.default);
app.use("/api/definition-equipments", definitionEquipmentRoutes_1.default);
app.use("/api/definition-backgrounds", definitionBackgroundRoutes_1.default);
app.use("/api/definition-clans", definitionClanRoutes_1.default);
app.use("/api/definition-predators", definitionPredatorRoutes_1.default);
app.use("/api/definition-resonances", definitionResonanceRoutes_1.default);
app.use("/api/definition-disciplines", definitionDisciplineRoutes_1.default);
app.use("/api/definition-blood-potencies", definitionBloodPotencyRoutes_1.default);
app.use("/api/character-vampires", characterVampireRoutes_1.default);
app.use("/api/creation-packages", creationPackageRoutes_1.default);
app.use("/api/upload", uploadRoutes_1.default);
app.use("/api/radar", radarLocationRoutes_1.default);
app.use("/api/missions-idle", missionIdleRoutes_1.default);
app.use("/api/story", storyRoutes_1.default);
app.use("/api/night-cycle", nightCycleRoutes_1.default);
// Base routes
app.get("/", (req, res) => {
    res.json({
        message: "LiraRPG API",
        version: "3.0.0",
        status: "online",
        description: "Servidor de backend limpo (apenas Autenticação)",
        engine: "Sequelize + MySQL2"
    });
});
app.get("/health", (req, res) => {
    res.json({ status: "OK", timestamp: new Date() });
});
app.get("/teste", async (req, res) => {
    try {
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
    console.error("Erro Global:", err.stack);
    res.status(500).json({ error: "Ocorreu um erro interno no servidor." });
});
exports.default = app;
