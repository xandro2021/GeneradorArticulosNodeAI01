/*
 * src/helpers/validate-user.ts
 * ----------------------------
 * Validar nombre
 * Validar apellidos
 * Validar Nick
 * Validar Email
 * Validar Password
 * Comprobar que todo se cumpla
 */
import validator from "validator";
import { RegisterUserDto } from "../dto/user.js";
import { AppError } from "../errors/AppError.js";

const validate = (user: RegisterUserDto) => {

  const name =
    !validator.isEmpty(user.name) &&
    validator.isLength(user.name, { min: 3, max: 50 }) &&
    validator.isAlpha(user.name, "es-ES");

  if (!name) {
    throw new AppError(400, "El usuario no se ha superado la validación de nombre");
  }

  const surname =
    !validator.isEmpty(user.surname) &&
    validator.isLength(user.surname, { min: 3, max: 80 }) &&
    validator.isAlpha(user.surname, "es-ES");

  if (!surname) {
    throw new AppError(400, "El usuario no se ha superado la validación del apellido");
  }

  const nick =
    !validator.isEmpty(user.nick) &&
    validator.isLength(user.nick, { min: 3, max: 80 });

  if (!nick) {
    throw new AppError(400, "El usuario no se ha superado la validación del apodo");
  }

  const email =
    !validator.isEmpty(user.email) &&
    validator.isEmail(user.email);

  if (!email) {
    throw new AppError(400, "Email inválido");
  }

  const password =
    !validator.isEmpty(user.password);


};

export default validate;
