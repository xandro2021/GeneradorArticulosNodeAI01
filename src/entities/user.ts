/*
 * src/entities/user.ts
 * ---------------------
 * Dar forma al modelo y a los DTO
 */
import { Types } from 'mongoose';

export interface UserBase {
  name: string;
  surname: string;
  nick: string;
  email: string;
  password: string;
  bio?: string | null;
  avatar?: string;
  created_at?: Date;
}

export interface User extends UserBase {
  _id?: Types.ObjectId;
}
