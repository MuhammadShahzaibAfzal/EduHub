export class ErrorHandlerService extends Error {
    status: number;

    constructor(statusCode: number, msg: string) {
        super();
        this.message = msg;
        this.status = statusCode;
    }

    static notFoundError(msg = "Not Found") {
        return new ErrorHandlerService(404, msg);
    }

    static unAuthorizedError(msg = "unAuthorized") {
        return new ErrorHandlerService(401, msg);
    }

    static forbiddenError(msg = "Not Allowed") {
        return new ErrorHandlerService(403, msg);
    }

    static alreadyExistError(msg = "Already exists") {
        return new ErrorHandlerService(422, msg);
    }
}
