/*
 * src/models/user.ts
 * --------------------
 * Importaciones
 * Definicion de esquema
 * Exportar modelo
 */
import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  nick: { type: String, required: true },
  email: { type: String, required: true },
  avatar: { type: String, default: "default.png" },
  bio: { type: String },
  password: { type: String, required: true },
  created_at: { type: Date, default: Date.now() },
});

export default model('User', UserSchema, 'users');
