/*
 * src/routes/user.ts
 */

// Importaciones
import express from 'express';
const router = express.Router();

import {
  register,
  login,
  profile,
  update,
  upload,
  avatar,
  pruebaJWT
} from '../controllers/user.js';

// Subida de archivos

// Definir las rutas
router.post('/register', register);
router.post('/login', login);
router.get('/profile/:id', profile);
router.put('/update', update);
router.put('/upload/:id', upload);
router.get('/avatar/:file', avatar);
router.get('/pruebajwt', pruebaJWT);

// Exportar las rutas
export default router;
