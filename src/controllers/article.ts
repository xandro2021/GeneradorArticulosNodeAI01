/*
 * src/controllers/article.ts
 * --------------------------
 * Importaciones
 * Acciones
 * Exportaciones
 */
import { Request, Response } from 'express';

const save = async (req: Request, res: Response) => {

  return res.status(200).json({
    status: 200,
    message: "Accion para guardar artículos"
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
