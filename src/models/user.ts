/*
 * src/models/user.ts
 * --------------------
 * Importaciones
 * Definicion de esquema
 * Exportar modelo
 */
import { Schema, model } from 'mongoose';
import { User } from '../entities/user.js';

const UserSchema = new Schema<User>({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  nick: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  bio: { type: String },
  avatar: { type: String, default: "default.png" },
  created_at: { type: Date, default: Date.now() },
});

export default model<User>('User', UserSchema, 'users');
