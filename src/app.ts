import express from "express";
import { errorHandlerMiddleware } from "./middlewares/error-handler-middleware";
import authRouter from "./routes/authRoutes";

const app = express();

app.get("/", (req, res) => {
    res.send("Welcome to EduHub APIs");
});

// Register routes
app.use("/auth", authRouter);

// Error Handler Middleware
app.use(errorHandlerMiddleware);

export default app;
