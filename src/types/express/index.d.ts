import "express";
import { JwtPayload } from "../jwtPayLoad.ts";

declare global {
  namespace Express {
    interface Request {
      user?: JwtPayload;
    }
  }
}
