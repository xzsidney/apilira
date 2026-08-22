import { Router, Request, Response } from 'express';
import multer from 'multer';
import path from 'path';

const router = Router();

// Agora armazenamos a imagem na memória RAM para converter em Base64
const storage = multer.memoryStorage();

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter: (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Formato de arquivo inválido. Apenas JPEG, PNG e WEBP são permitidos.'));
    }
  }
});

// Endpoint de Upload
router.post('/', upload.single('avatar'), (req: Request, res: Response) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'Nenhum arquivo enviado.' });
    }
    
    // Converte o buffer da imagem direto para uma string Base64
    const base64Data = req.file.buffer.toString('base64');
    const mimeType = req.file.mimetype;
    const avatarUrl = `data:${mimeType};base64,${base64Data}`;
    
    return res.status(200).json({ url: avatarUrl });
  } catch (error) {
    console.error('Erro no upload base64:', error);
    return res.status(500).json({ error: 'Erro ao processar o upload da imagem.' });
  }
});

export default router;
