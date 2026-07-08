"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadCharacterAvatar = exports.uploadAvatarMiddleware = void 0;
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const models_1 = require("../models");
// Ensure upload directory exists
const uploadDir = path_1.default.join(__dirname, "../../public/uploads");
try {
    if (!fs_1.default.existsSync(uploadDir)) {
        fs_1.default.mkdirSync(uploadDir, { recursive: true });
    }
}
catch (err) {
    console.error("Warning: Cannot create upload directory on startup:", err);
}
// Configure multer storage
const storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadDir);
    },
    filename: function (req, file, cb) {
        const ext = path_1.default.extname(file.originalname);
        const charId = req.params.id || 'avatar';
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, `char_${charId}_${uniqueSuffix}${ext}`);
    }
});
const upload = (0, multer_1.default)({
    storage: storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
    fileFilter: (req, file, cb) => {
        const filetypes = /jpeg|jpg|png|webp/;
        const mimetype = filetypes.test(file.mimetype);
        const extname = filetypes.test(path_1.default.extname(file.originalname).toLowerCase());
        if (mimetype && extname) {
            return cb(null, true);
        }
        cb(new Error("Apenas imagens são permitidas (jpeg, jpg, png, webp)"));
    }
});
// Middleware to handle single file upload
exports.uploadAvatarMiddleware = upload.single("avatar");
const uploadCharacterAvatar = async (req, res) => {
    try {
        const { id } = req.params;
        if (!req.file) {
            res.status(400).json({ error: "Nenhuma imagem foi enviada." });
            return;
        }
        const character = await models_1.Character.findByPk(id);
        if (!character) {
            res.status(404).json({ error: "Personagem não encontrado." });
            return;
        }
        // The URL that the frontend will use to access the image
        const avatarUrl = `/uploads/${req.file.filename}`;
        // Update character with new avatarUrl
        await models_1.Character.update({ avatarUrl }, { where: { id } });
        const updatedCharacter = await models_1.Character.findByPk(id);
        res.json({
            message: "Avatar atualizado com sucesso",
            avatarUrl: updatedCharacter?.avatarUrl,
        });
    }
    catch (error) {
        console.error("Erro no upload de avatar:", error);
        res.status(500).json({ error: "Erro ao atualizar avatar do personagem." });
    }
};
exports.uploadCharacterAvatar = uploadCharacterAvatar;
