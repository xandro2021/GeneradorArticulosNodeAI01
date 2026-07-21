/*
 * src/controllers/user.ts
 */
import { Request, Response } from "express";
import { LoginUserDto, RegisterUserDto, UpdateUserDto } from '../dto/user.js';
import ServiceUser from '../services/user.js';
import { AppError } from "../errors/AppError.js";
import { guardAsync } from "../errors/guard.js";
import path from 'path';
import { promises as fs } from "fs";

/*
 * Recoger datos de peticion
 * Validar datos
 * Control de usuarios duplicados
 * Cifrar la contraseña
 * Crear objeto de usuario
 * Guardar usuario en la base de datos
 * Devolucion de la respuesta
 */
const register = async (req: Request<{}, {}, RegisterUserDto>, res: Response) => {

  const user = await ServiceUser.register(req.body);

  return res.status(201).json({
    status: "success",
    user
  });

};

/*
 * Recoger los datos del body
 * Comprobar que me llegan bien
 * Comprobar que el usuario existe
 * Comparar la contraseña
 * Crear el JWT
 * Devolver respuesta
 */
const login = async (req: Request<{}, {}, LoginUserDto>, res: Response) => {

  const { userLogin: user, token } = await ServiceUser.login(req.body);

  return res.status(200).json({
    status: "success",
    user,
    token
  });
};

const profile = async (req: Request, res: Response) => {

  const user = await ServiceUser.profile(req.params.id as string);

  return res.status(200).json({
    status: 200,
    message: "Acción para ver el perfil de un usuario",
    user
  });
};

/*
 * Coseguir identidad del usuario
 * Crear objeto con los nuevos datos
 * Validar los datos
 * Buscar si el usuario existe en la BD
 * Recorrer y comprobar los usuarios
 * Actualizar el usuario en la base de datos
 */
const update = async (req: Request<{}, {}, UpdateUserDto>, res: Response) => {

  const user = await ServiceUser.update(req.body, req.user!);

  return res.status(200).json({
    status: 200,
    message: "Acción para editar un usuario",
    user
  });
};

/*
 * Recoger id de usuario
 * Recoger el fichero y comprobar que existe
 * Nombre del archivo
 * Sacar la extension del archivo
 * Borrar el archivo si la extension es incorrecta
 * Buscar y actualizar el usuario en la bd
 */
const upload = async (req: Request, res: Response) => {
  const id = req.user?.id;

  if (!req.file) {
    throw new AppError(400, "La petición no incluye la imagen del avatar");
  }

  const user = await guardAsync(() => ServiceUser.upload(id!, req.file!), 500, "Error al actualizar usuario");

  return res.status(200).json({
    status: 200,
    message: "Acción para subir avatar o imagen de usuario",
    user
  });
};

const avatar = async (req: Request, res: Response) => {
    const file = req.params.file;

    const filePath = "./uploads/avatars/" + file;

    try {
        await fs.stat(filePath);

        return res.sendFile(path.resolve(filePath));
    } catch {
        throw new AppError(404, "La imagen no existe");
    }
};

const pruebaJWT = async (req: Request, res: Response) => {

  res.status(200).json({
    status: 200,
    message: "Estas correctamente autenticado",
    datosDelUsuario: req.user
  });
};

// Exportaciones
export {
  register,
  login,
  profile,
  update,
  upload,
  avatar,
  pruebaJWT
}
