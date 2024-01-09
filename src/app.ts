import express from "express";
import { errorHandlerMiddleware } from "./middlewares/error-handler-middleware";

const app = express();

app.get("/", (req, res) => {
    res.send("Welcome to EduHub APIs");
});

// Error Handler Middleware
app.use(errorHandlerMiddleware);

export default app;
