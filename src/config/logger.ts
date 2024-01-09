import winston from "winston";

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
        new winston.transports.Console(),
        new winston.transports.File({
            dirname: "logs",
            filename: "error.log",
            level: "error",
        }),
        new winston.transports.File({
            dirname: "logs",
            filename: "combined.log",
        }),
    ],
});
