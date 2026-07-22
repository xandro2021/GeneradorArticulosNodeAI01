/*
 * src/controllers/article.ts
 * --------------------------
 * Importaciones
 * Acciones
 * Exportaciones
 */
import { Request, Response } from 'express';
import { AppError } from '../errors/AppError.js';
import validate from '../helpers/validate-article.js';
import Article from '../models/article.js';
import { guardAsync } from '../errors/guard.js';

const save = async (req: Request, res: Response) => {

  let body = req.body;

  validate(body);

  const identityId = req.user!.id;
  body.user = identityId;

  const articleToSave = new Article(body);

  const article = await guardAsync(() => articleToSave.save(), 500, "Error al guardar los articulos");

  if (!article) {
    throw new AppError(404, "El articulo no se ha guardado correctamente");
  }

  return res.status(200).json({
    status: "success",
    message: "Accion para guardar articulos",
    article
  });
};

const list = async (req: Request, res: Response) => {

  return res.status(200).json({
    status: 200,
    message: "Accion para listar los artículos"
  });
};

const details = async (req: Request, res: Response) => {

  return res.status(200).json({
    status: 200,
    message: "Accion para mostrar un solo artículo"
  });
};

const update = async (req: Request, res: Response) => {

  return res.status(200).json({
    status: 200,
    message: "Accion para actualizar un artículo"
  });
};

const generate = async (req: Request, res: Response) => {

  return res.status(200).json({
    status: 200,
    message: "Accion para generar con IA un artículo"
  });
};

const remove = async (req: Request, res: Response) => {

  return res.status(200).json({
    status: 200,
    message: "Accion para eliminar un artículo"
  });
};

const byUser = async (req: Request, res: Response) => {

  return res.status(200).json({
    status: 200,
    message: "Accion para sacar un artículos creados por un usuario"
  });
};

const search = async (req: Request, res: Response) => {

  return res.status(200).json({
    status: 200,
    message: "Accion para sacar buscar artículos"
  });
};

const upload = async (req: Request, res: Response) => {

  return res.status(200).json({
    status: 200,
    message: "Accion para subir imagen a un artículo"
  });
};

const poster = async (req: Request, res: Response) => {

  return res.status(200).json({
    status: 200,
    message: "Accion para sacar imagen del artículo"
  });
};

export {
  save,
  list,
  details,
  generate,
  update,
  remove,
  byUser,
  search,
  upload,
  poster
}
