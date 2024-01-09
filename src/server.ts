import app from "./app";
import { Config } from "./config";
import { logger } from "./config/logger";

const startServer = () => {
    const PORT = Config.PORT;
    try {
        throw Error("something went wrong");
        app.listen(PORT, () => {
            logger.info(`Server is listning on port ${PORT}`);
        });
    } catch (error) {
        if (error instanceof Error) {
            logger.error(error.message);
        }
        setTimeout(() => {
            process.exit(1);
        }, 1000);
    }
};

startServer();
