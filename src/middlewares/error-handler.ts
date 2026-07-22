/*
 * src/middlewares/error-handler.ts
 * --------------------------------
 * Clase middleware para el manejo de errores
 * lo que ayuda a simplificar los controllers
 * al ya no requerir try-catch
 */
import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/AppError.js";

const errorHandler = (
  error: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {

  console.error(error);

  if (error instanceof AppError) {

    return res.status(error.statusCode).json({
      status: "error",
      message: error.message,
      error
    });
  }
  else if (error instanceof Error) {

    return res.status(500).json({
      status: "error",
      message: error.message,
      error
    });
  }

  return res.status(500).json({
    status: "error",
    message: "Error interno del servidor",
    error
  });

};

export default errorHandler;
