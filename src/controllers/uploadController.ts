import { Request, Response } from "express";
import multer from "multer";
import path from "path";
import fs from "fs";
import prisma from "../config/db";

// Ensure upload directory exists
const uploadDir = path.join(__dirname, "../../public/uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Configure multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    const charId = req.params.id || 'avatar';
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, `char_${charId}_${uniqueSuffix}${ext}`);
  }
});

const upload = multer({ 
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter: (req, file, cb) => {
    const filetypes = /jpeg|jpg|png|webp/;
    const mimetype = filetypes.test(file.mimetype);
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    if (mimetype && extname) {
      return cb(null, true);
    }
    cb(new Error("Apenas imagens são permitidas (jpeg, jpg, png, webp)"));
  }
});

// Middleware to handle single file upload
export const uploadAvatarMiddleware = upload.single("avatar");

export const uploadCharacterAvatar = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    
    if (!req.file) {
      res.status(400).json({ error: "Nenhuma imagem foi enviada." });
      return;
    }

    const character = await prisma.character.findUnique({ where: { id } });
    
    if (!character) {
      res.status(404).json({ error: "Personagem não encontrado." });
      return;
    }

    // The URL that the frontend will use to access the image
    const avatarUrl = `/uploads/${req.file.filename}`;

    // Update character with new avatarUrl
    const updatedChar = await prisma.character.update({
      where: { id },
      data: { avatarUrl }
    });

    res.status(200).json({ 
      message: "Avatar atualizado com sucesso", 
      avatarUrl: updatedChar.avatarUrl 
    });

  } catch (error) {
    console.error("Erro no upload de avatar:", error);
    res.status(500).json({ error: "Erro ao atualizar avatar do personagem." });
  }
};
