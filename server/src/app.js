import express from "express";
import cors from "cors";
import todoRoutes from "./routes/todo.routes.js"
import { errorHandler } from "./middleware/errorHandler.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/todos",todoRoutes);

app.use((req,res)=> {
    res.status(404).json({message: "Route not found"});
});

app.use(errorHandler);

export default app;
