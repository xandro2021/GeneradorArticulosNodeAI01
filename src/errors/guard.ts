/*
 * src/errors/guard.ts
 */

import { AppError } from "./AppError.js";

export function guard<T>(
  fn: () => T,
  statusCode: number,
  message: string
): T {

  try {
    return fn();
  } catch (error) {
    throw new AppError(statusCode, message, error);
  }

}

export async function guardAsync<T>(
  fn: () => Promise<T>,
  statusCode: number,
  message: string
): Promise<T> {
  try {
    return await fn();
  } catch (error) {
    throw new AppError(statusCode, message, error);
  }
}
