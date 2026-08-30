import { Router, Request, Response } from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';

const router = Router();

// Usa a pasta persistente se existir na env, senão usa a pasta local
const uploadDir = process.env.PERSISTENT_UPLOAD_DIR || path.join(__dirname, '../../public/uploads');
const charactersDir = path.join(uploadDir, 'characters');

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}
if (!fs.existsSync(charactersDir)) {
  fs.mkdirSync(charactersDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Verifica se foi enviado um folder específico no body, senao usa characters
    const targetFolder = req.body.folder || 'characters';
    
    // Proteção contra path traversal (ex: folder='../etc')
    const safeFolder = targetFolder.replace(/[^a-zA-Z0-9-_]/g, '');
    
    const finalDir = path.join(uploadDir, safeFolder);
    
    // Cria a subpasta caso não exista
    if (!fs.existsSync(finalDir)) {
      fs.mkdirSync(finalDir, { recursive: true });
    }
    
    cb(null, finalDir);
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const filename = `${uuidv4()}${ext}`;
    cb(null, filename);
  }
});

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
    
    // Pega o diretório real onde o multer salvou o arquivo no disco
    const relativeDir = path.relative(uploadDir, req.file.destination).replace(/\\/g, '/');
    const safeFolder = relativeDir || 'characters';
    
    // Constrói a URL para acessar a imagem estaticamente
    const avatarUrl = `/uploads/${safeFolder}/${req.file.filename}`;
    
    return res.status(200).json({ url: avatarUrl });
  } catch (error) {
    console.error('Erro no upload físico:', error);
    return res.status(500).json({ error: 'Erro ao processar o upload da imagem.' });
  }
});

export default router;
