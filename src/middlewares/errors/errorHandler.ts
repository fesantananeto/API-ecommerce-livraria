import { NextFunction, Request, Response } from "express";
import ApiError from "../../infra/apiErrors/ApiError";
import { JsonWebTokenError } from "jsonwebtoken";

export default function errorHandler(
    error: Error,
    req: Request,
    res: Response,
    next: NextFunction
) {
    console.error(error);
    if (error instanceof ApiError) {
        return res.status(error.statusCode).json(error.message);
    }
    if (error instanceof JsonWebTokenError) {
        return res.status(401).json(error.message);
    }
    return res.status(500).json("Erro interno do servidor.");
}
