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

const router = express.Router();

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

router.post('/save', save);
router.get('/list/:page', list);
router.get('/detail/:page', details);
router.post('/generate-ia', generate);
router.put('/update', update);
router.delete('/remove', remove);
router.get('/by-user/:userId', byUser);
router.get('/search/:search', search);
router.put('/upload/:id', upload);
router.get('/poster/:file', poster);

export default router;
