/*
 * src/middlewares/auth.ts
 * ------------------------
 * Importar modulos
 * Importar clave secreta
 * Middleware de autenticacion
 * Pasar a la siguiente accion - NEXT
 */
import { Request, Response, NextFunction } from "express";

const auth = (
  req: Request,
  res: Response,
  next: NextFunction
) => {

};
