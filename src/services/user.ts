/*
 * src/services/user.ts
 */
import bcrypt from 'bcryptjs';
import { LoginUserDto, RegisterUserDto, UserResponseDto } from '../dto/user.js';
import { AppError } from '../errors/AppError.js';
import validate from '../helpers/validate-user.js';
import User from '../models/user.js';

const register = async (user: RegisterUserDto) => {

    validate(user);

    const exists = await User.findOne({
        $or: [
            { email: user.email.toLowerCase() },
            { nick: user.nick.toLowerCase() }
        ]
    });

    if (exists) {
        throw new AppError(409, "El usuario ya existe");
    }

    // hash
    const userToSave = {
        ...user,
        password: await bcrypt.hash(user.password, 10),
        email: user.email.toLowerCase(),
        nick: user.nick.toLowerCase()
    };

    const userSaved = await User.create(userToSave);

    const userResponse: UserResponseDto = {
        name: userSaved.name,
        surname: userSaved.surname,
        nick: userSaved.nick,
        email: userSaved.email,
        avatar: userSaved.avatar,
        bio: userSaved.bio,
        created_at: userSaved.created_at
    };

    return userResponse;
}

const login = async (body: LoginUserDto) => {

    if (!body.email || !body.password) {
        throw new AppError(400, "Faltan datos por enviar");
    }

    const user = await User.findOne({ email: body.email.toLowerCase() });

    if (!user) {
        throw new AppError(500, "Error al buscar el usuario");
    }

    const pwd = bcrypt.compareSync(body.password, user.password);

    if (!pwd) {
        throw new AppError(400, "La contraseña no es correcta!!!");
    }

    const token = null;

    const userLogin = {
        _id: user._id,
        name: user.name,
        nick: user.nick
    };

    return {
        userLogin,
        token
    }
};

export default {
    register,
    login
}
