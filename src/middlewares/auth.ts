/*
 * src/middlewares/auth.ts
 * ------------------------
 * Importar modulos
 * Importar clave secreta
 * Middleware de autenticacion
 * Pasar a la siguiente accion - NEXT
 */
import { Request, Response, NextFunction } from "express";
import jwt from 'jwt-simple';
import { env } from '../config/env.js';
import { AppError } from "../errors/AppError.js";
import { JwtPayload } from "../types/jwtPayLoad.js";
import { guard } from "../errors/guard.js";

/*
 * Comprobar si me llega la cabecera de autenticación
 * Limpiar el token
 * Decodificar el token
 * Comprobar la expiración del token
 * Añadir los datos del usuario a la request
 * Pasar a la acción
 */
const auth = (
  req: Request,
  res: Response,
  next: NextFunction
) => {

  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new AppError(401, "La petición no tiene autenticación");
  }

  const [scheme, token] = authHeader.split(" ");

  if (scheme !== "Bearer" || !token) {
    throw new AppError(401, "Token inválido");
  }

  const payload = guard(() => jwt.decode(token, env.jwtSecret) as JwtPayload, 500, "Error al decodificar el token");

  const now = Math.floor(Date.now() / 1000);

  if (payload.exp <= now) {
    throw new AppError(401, "El token de autenticación ha expirado");
  }

  // Agregar datos del usuario a la request
  req.user = payload;

  console.log('Payload:\n' + payload);
  next();
};

export default auth;
