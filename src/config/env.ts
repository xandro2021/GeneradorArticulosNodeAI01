import dotenv from "dotenv";

dotenv.config();

const requiredVariables = [
  "JWT_SECRET",
  "MONGODB_URI",
  "PORT",
] as const;

for (const variable of requiredVariables) {
  if (!process.env[variable]) {
    throw new Error(
      `La variable de entorno ${variable} no está definida`
    );
  }
}

export const env = {
  jwtSecret: process.env.JWT_SECRET,
  mongoUri: process.env.MONGODB_URI,
  port: Number(process.env.PORT),
};
