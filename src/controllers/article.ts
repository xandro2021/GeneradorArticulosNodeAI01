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
import { populate } from 'dotenv';

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

/*
 * Sacar los parametros
 * Controlar la pagina en la que estamos
 * Consultar y listar los articulos (mongoose paginate)
 * Devolver resultado
 */
const list = async (req: Request, res: Response) => {

  const params = req.params;

  let page = 1;

  if (req.params.page) {
    page = Number(req.params.page);

    if (Number.isNaN(page) || page < 1) {
      page = 1;
    }
  }

  const itemsPerPage = 10;

  const options = {
    page,
    limit: itemsPerPage,
    sort: { created_at: -1 },
    populate:{ path: "user", select: "-password -__v -created_at -email" }
  };

  const result = await guardAsync(() => Article.paginate({}, options), 500, "Error al listar articulos");

  if (!result) {
    throw new AppError(404, "No hay articulos para mostrar");
  }

  return res.status(200).json({
    status: "success",
    message: "Accion para listar los artículos",
    itemsPerPage,
    total: result.totalDocs,
    articles: result.docs,
    pages: Math.ceil(result.totalDocs / itemsPerPage),
  });
};

const details = async (req: Request, res: Response) => {

  const id = req.params.id;
  const article = await guardAsync(
    () => Article.findById(id).populate({ path: "user", select: "-password -__v -created_at -email" }),
    500,
    "Error al buscar el articulo, verifique que el id sea correcto"
  );

  if (!article) {
    throw new AppError(404, "No existe el articulo");
  }

  return res.status(200).json({
    status: "success",
    message: "Accion para mostrar un solo artículo",
    article
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
