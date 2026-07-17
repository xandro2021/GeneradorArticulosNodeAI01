/*
 * src/services/user.ts
 */
import { RegisterUserDto } from '../dto/user.js';
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

    if(exists){
        throw new AppError(409, "El usuario ya existe");
    }

    // hash

    // guardar


}

export default {
  register,
}
