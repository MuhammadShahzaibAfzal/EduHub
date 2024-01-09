import app from "./app";
import { Config } from "./config";

const startServer = () => {
    const PORT = Config.PORT;
    try {
        app.listen(PORT, () => {
            // eslint-disable-next-line no-console
            console.log(`Server is listning on port ${PORT}`);
        });
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log(`Something went wrong while starting server`);
        process.exit(1);
    }
};

startServer();
