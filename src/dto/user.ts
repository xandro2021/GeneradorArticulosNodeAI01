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

type UserBasicDto = Pick<
  UserBase,
  "name" | "surname" | "nick" | "avatar"
>;

export type UserProfileDto = UserBasicDto & Pick<
  UserBase,  "bio" | "created_at"> & {
  _id: string;
};

export type ValidatableUser = Omit<RegisterUserDto, "password">;
