import http from "http";
import { Server as SocketIOServer } from "socket.io";
import dotenv from "dotenv";
dotenv.config();

import app from "./app";
import { initFamilySocket } from "./services/familySocketService";

const PORT = process.env.PORT || 3001;

const server = http.createServer(app);

// Inicializa Socket.IO com suporte a CORS
const io = new SocketIOServer(server, {
  cors: {
    origin: ["https://liragames.com.br", "https://www.liragames.com.br", "http://localhost:3000", "http://localhost:5173"],
    methods: ["GET", "POST"],
    credentials: true,
  },
});

// Inicializa o serviço de WebSockets da Família Lira
initFamilySocket(io);

server.listen(PORT, () => {
  console.log(`===============================================`);
  console.log(`  LiraRPG API + WebSockets rodando em http://localhost:${PORT}`);
  console.log(`  Ambiente: ${process.env.NODE_ENV || "development"}`);
  console.log(`===============================================`);
});

