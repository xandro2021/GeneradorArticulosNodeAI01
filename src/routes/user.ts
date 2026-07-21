/*
 * src/routes/user.ts
 */

// Importaciones
import express from 'express';
import auth from '../middlewares/auth.js';

import {
  register,
  login,
  profile,
  update,
  upload,
  avatar,
  pruebaJWT
} from '../controllers/user.js';

import multer, { diskStorage } from 'multer';

const router = express.Router();
// Subida de archivos

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/avatars");
  },
  filename: (req, file, cb) => {
    cb(null, "avatar-" + Date.now() + "-" + file.originalname);
  }
});

const uploadsAvatar = multer({ storage });

// Definir las rutas
router.post('/register', register);
router.post('/login', login);
router.get('/profile/:id', profile);
router.put('/update', auth, update);
router.put('/upload', [auth, uploadsAvatar.single('file0')], upload);
router.get('/avatar/:file', avatar);
router.get('/pruebajwt', auth, pruebaJWT);

// Exportar las rutas
export default router;
