/*
 * src/routes/article.ts
 * ---------------------
 * Importaciones
 * Cargar middleware de autenticacion
 * Configuracion subida de archivos
 * Defino rutas
 * Exporto las rutas
 */
import express from 'express';
import auth from '../middlewares/auth.js';

import {
  save,
  list,
  details,
  generate,
  update,
  remove,
  byUser,
  search,
  upload,
  poster
} from '../controllers/article.js';

import multer from 'multer';

const router = express.Router();
// Subida de archivos

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, "./uploads/posters");
  },
  filename: (_req, file, cb) => {
    cb(null, "poster-" + Date.now() + "-" + file.originalname);
  }
});

const uploadsPoster = multer({ storage });

router.post('/save', auth, save);
router.get('/list/:page', list);
router.get('/detail/:id', details);
router.post('/generate-ia', generate);
router.put('/update', update);
router.delete('/remove', remove);
router.get('/by-user/:userId', byUser);
router.get('/search/:search', search);
router.put('/upload/:id', upload);
router.get('/poster/:file', poster);

export default router;
