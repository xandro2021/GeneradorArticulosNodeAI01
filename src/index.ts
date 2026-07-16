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
import dotenv from "dotenv";
import { Request, Response } from "express";

import connection from "./database/connection.js";
import userRoutes from './routes/user.js';
import articleRoutes from './routes/article.js';
import errorHandler from "./middlewares/error-handler.js";

dotenv.config();

const start = async (): Promise<void> => {
  await connection();

  const app = express();
  const port = 3000;

  app.use(cors());

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use('/api/user', userRoutes);
  app.use('/api/article', articleRoutes);

  app.get(
    "/pruebitas",
    (_req: Request, res: Response): void => {
      res.status(200).json({
        titulo: "Man to the Moon",
        description: "Pelicula de Jim Carrey",
      });
    }
  );

  // Middlware de manejo de errores
  app.use(errorHandler);

  app.listen(port, () => {
    console.log(`Servidor escuchando en ${port}`);
  });
};

start();
