"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const socket_io_1 = require("socket.io");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app_1 = __importDefault(require("./app"));
const familySocketService_1 = require("./services/familySocketService");
const PORT = process.env.PORT || 3001;
const server = http_1.default.createServer(app_1.default);
// Inicializa Socket.IO com suporte a CORS
const io = new socket_io_1.Server(server, {
    cors: {
        origin: ["https://liragames.com.br", "https://www.liragames.com.br", "http://localhost:3000", "http://localhost:5173"],
        methods: ["GET", "POST"],
        credentials: true,
    },
});
// Inicializa o serviço de WebSockets da Família Lira
(0, familySocketService_1.initFamilySocket)(io);
server.listen(PORT, () => {
    console.log(`===============================================`);
    console.log(`  LiraRPG API + WebSockets rodando em http://localhost:${PORT}`);
    console.log(`  Ambiente: ${process.env.NODE_ENV || "development"}`);
    console.log(`===============================================`);
});
