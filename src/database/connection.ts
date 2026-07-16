/*
 * src/datbase/connection.ts
 * ---------------------
 * Conectarme a mongodb
 * Exportar la conexión
 */
import mongoose from "mongoose";

const connection = async (): Promise<void> => {
    try {
        mongoose.set("strictQuery", true);

        await mongoose.connect(process.env.MONGODB_URI!);

        console.log("Te has conectado correctamente");
    } catch (error) {
        console.error(error);

        throw new Error("No se ha podido conectar a la base de datos");
    }
};

export default connection;
