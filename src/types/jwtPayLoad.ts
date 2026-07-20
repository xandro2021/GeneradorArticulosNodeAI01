/*
 * src/types/jwtPayLoad.ts
 * -------------------
 * Este elemento representa el usuario que viaja
 * en el payload del JWT
 */
import { UserBase } from "../entities/user.js";

type JwtUserData = Pick<
  UserBase,
  "name" | "surname" | "nick" | "email" | "bio" | "avatar"
>;

export interface JwtPayload extends JwtUserData {
  id: string;
  iat: number;
  exp: number;
}
