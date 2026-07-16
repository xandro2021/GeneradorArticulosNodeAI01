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
        email: user.email
    });

    if(exists){
        throw new AppError(409, "Email ya registrado");
    }

    // hash

    // guardar


}

export default {
  register,
}
