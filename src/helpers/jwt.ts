/*
 * src/helpers/jwt.ts
 * ----------------------
 * Importar dependencias
 * Clave secreta
 * Crear función para generar tokens
 * Exportar función
 */
import jwt from 'jwt-simple';
import { HydratedDocument } from 'mongoose';
import { User } from '../entities/user.js';
import { env } from '../config/env.js';

const createToken = (user: HydratedDocument<User>) => {

  const now = Math.floor(Date.now() / 1000);
  const expiration = now + 30 * 24 * 60 * 60;

  const payload = {
    id: user._id.toString(),
    name: user.name,
    surname: user.surname,
    nick: user.nick,
    email: user.email,
    bio: user.bio,
    avatar: user.avatar,
    iat: now,
    exp: expiration
  }

  return jwt.encode(payload, env.jwtSecret);
};

export default {
  createToken,
}
