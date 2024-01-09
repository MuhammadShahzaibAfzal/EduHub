import winston from "winston";
import { Config } from ".";

export const logger = winston.createLogger({
    level: "info",
    defaultMeta: {
        serviceName: "EduHub Backend API's",
    },
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json(),
        winston.format.prettyPrint(),
    ),
    transports: [
        new winston.transports.Console({
            silent: Config.NODE_ENV === "test",
        }),
        new winston.transports.File({
            dirname: "logs",
            filename: "error.log",
            level: "error",
            silent: Config.NODE_ENV === "test",
        }),
        new winston.transports.File({
            dirname: "logs",
            filename: "combined.log",
            silent: Config.NODE_ENV === "test",
        }),
    ],
});
