import { Request, Response, NextFunction } from "express";
import { ErrorHandlerService } from "../services/ErrorHandlerService";
import { Config } from "../config";

export const errorHandlerMiddleware = (
    err: ErrorHandlerService,
    req: Request,
    res: Response,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    next: NextFunction,
) => {
    let statusCode = 500;

    // Server Error
    let data = {
        message: "Internal Server Error !",
        ...(Config.NODE_ENV === "development" && {
            originalMessage: err.message,
        }),
    };

    // TODO : Handle Validation Error

    if (err instanceof ErrorHandlerService) {
        statusCode = err.status;
        data = {
            message: err.message,
        };
    }

    return res.status(statusCode).json(data);
};
