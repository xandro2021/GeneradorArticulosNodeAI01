/*
 * src/dto/user.ts
 */

export interface User {
  name: string;
  surname: string;
  nick: string;
  email: string;
  password: string;
  bio?: string;
  avatar?: string;
  created_at?: Date;
}

export type RegisterUserDto = Pick<
  User,
  "name" | "surname" | "nick" | "email" | "password" | "bio"
>;

export type LoginUserDto = Pick<User, "email" | "password">;

export type UpdateUserDto = Partial<
  Pick<User, "name" | "surname" | "nick" | "email" | "bio">
>;

export type UserResponseDto = Omit<User, "password">;
