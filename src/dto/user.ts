/*
 * src/dto/user.ts
 */

import { UserBase } from "../entities/user.js";


export type RegisterUserDto = Pick<
  UserBase,
  "name" | "surname" | "nick" | "email" | "password" | "bio"
>;

export type LoginUserDto = Pick<UserBase, "email" | "password">;

export type UpdateUserDto = Partial<
  Pick<UserBase, "name" | "surname" | "nick" | "email" | "bio">
>;

export interface UserResponseDto extends Omit<UserBase, "password"> {
  _id?: string;
}
