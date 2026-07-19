/*
 * src/index.ts
 * ----------------------------------------------
 * Importar dependencias
 * Conectarme a la BD
 * Crear servidor de node
 * Configurar el cors
 * Convertir los datos del body a objetos de js
 * Cargar configuración de rutas
 * Poner el servidor a escuchar peticiones http
 */
import express from "express";
import cors from "cors";

import connection from "./database/connection.js";
import userRoutes from './routes/user.js';
import articleRoutes from './routes/article.js';
import errorHandler from "./middlewares/error-handler.js";
import { env } from './config/env.js';


const start = async (): Promise<void> => {
  await connection();

  const app = express();

  app.use(cors());

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use('/api/user', userRoutes);
  app.use('/api/article', articleRoutes);

  // Middlware de manejo de errores
  app.use(errorHandler);

  app.listen(env.port, () => {
    console.log(`Servidor escuchando en ${env.port}`);
  });
};

start();
