/*
 * src/controllers/user.ts
 */
import { Request, Response } from "express";
import { RegisterUserDto } from '../dto/user.js';
import ServiceUser from '../services/user.js';

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

  await ServiceUser.register(req.body);

  return res.status(201).json({
    status: "success",
    body: req.body
  });

};

const login = async (req: Request, res: Response) => {
  res.status(200).json({
    status: 200,
    message: "Acción para identificar usuario"
  });
};

const profile = async (req: Request, res: Response) => {
  res.status(200).json({
    status: 200,
    message: "Acción para ver el perfil de un usuario"
  });
};

const update = async (req: Request, res: Response) => {
  res.status(200).json({
    status: 200,
    message: "Acción para editar un usuario"
  });
};

const upload = async (req: Request, res: Response) => {
  res.status(200).json({
    status: 200,
    message: "Acción para subir avatar o imagen de usuario"
  });
};

const avatar = async (req: Request, res: Response) => {
  res.status(200).json({
    status: 200,
    message: "Acción para sacar la imagen de avatar del usuario"
  });
};

// Exportaciones
export {
  register,
  login,
  profile,
  update,
  upload,
  avatar
}
