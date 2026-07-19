/*
 * src/datbase/connection.ts
 * ---------------------
 * Conectarme a mongodb
 * Exportar la conexión
 */
import { env } from '../config/env.js';
import mongoose from "mongoose";

const connection = async (): Promise<void> => {
    try {
        mongoose.set("strictQuery", true);

        await mongoose.connect(env.mongoUri);

        console.log("Te has conectado correctamente");
    } catch (error) {
        console.error(error);

        throw new Error("No se ha podido conectar a la base de datos");
    }
};

export default connection;
