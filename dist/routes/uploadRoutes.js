"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const uuid_1 = require("uuid");
const router = (0, express_1.Router)();
// Usa a pasta persistente se existir na env, senão usa a pasta local
const uploadDir = process.env.PERSISTENT_UPLOAD_DIR || path_1.default.join(__dirname, '../../public/uploads');
const charactersDir = path_1.default.join(uploadDir, 'characters');
if (!fs_1.default.existsSync(uploadDir)) {
    fs_1.default.mkdirSync(uploadDir, { recursive: true });
}
if (!fs_1.default.existsSync(charactersDir)) {
    fs_1.default.mkdirSync(charactersDir, { recursive: true });
}
const storage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        // Verifica se foi enviado um folder específico no body, senao usa characters
        const targetFolder = req.body.folder || 'characters';
        // Proteção contra path traversal (ex: folder='../etc')
        const safeFolder = targetFolder.replace(/[^a-zA-Z0-9-_]/g, '');
        const finalDir = path_1.default.join(uploadDir, safeFolder);
        // Cria a subpasta caso não exista
        if (!fs_1.default.existsSync(finalDir)) {
            fs_1.default.mkdirSync(finalDir, { recursive: true });
        }
        cb(null, finalDir);
    },
    filename: (req, file, cb) => {
        const ext = path_1.default.extname(file.originalname);
        const filename = `${(0, uuid_1.v4)()}${ext}`;
        cb(null, filename);
    }
});
const upload = (0, multer_1.default)({
    storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
    fileFilter: (req, file, cb) => {
        const allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];
        if (allowedTypes.includes(file.mimetype)) {
            cb(null, true);
        }
        else {
            cb(new Error('Formato de arquivo inválido. Apenas JPEG, PNG e WEBP são permitidos.'));
        }
    }
});
// Endpoint de Upload
router.post('/', upload.single('avatar'), (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'Nenhum arquivo enviado.' });
        }
        // Pega o diretório real onde o multer salvou o arquivo no disco
        const relativeDir = path_1.default.relative(uploadDir, req.file.destination).replace(/\\/g, '/');
        const safeFolder = relativeDir || 'characters';
        // Constrói a URL para acessar a imagem estaticamente
        const avatarUrl = `/uploads/${safeFolder}/${req.file.filename}`;
        return res.status(200).json({ url: avatarUrl });
    }
    catch (error) {
        console.error('Erro no upload físico:', error);
        return res.status(500).json({ error: 'Erro ao processar o upload da imagem.' });
    }
});
exports.default = router;
