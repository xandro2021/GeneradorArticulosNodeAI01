/*
 * src/helpers/validate-article.ts
 * ----------------------------
 * Validar titulo
 * Validar contenido
 * Comprobar que todo se cumpla
 */
import validator from "validator";
import { RegisterUserDto, ValidatableUser } from "../dto/user.js";
import { AppError } from "../errors/AppError.js";

const validate = (params: any) => {

  const title =
    !validator.isEmpty(params.title) &&
    validator.isLength(params.title, { min: 5, max: 150 });

  if (!title) {
    throw new AppError(400, "El usuario no se ha superado la validación de nombre");
  }

  const content =
    !validator.isEmpty(params.content) &&
    validator.isLength(params.content, { min: 5 });

  if (!content) {
    throw new AppError(400, "El usuario no se ha superado la validación del apellido");
  }


};

export default validate;
