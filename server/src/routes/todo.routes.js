import { Router } from "express";
import { createTodo, getTodos, toggleDone, updateTodo } from "../controllers/todo.controller.js";

const router = Router();

router.get("/",getTodos);
router.post("/",createTodo);
router.put("/:id",updateTodo);
router.patch("/:id/done",toggleDone);

export default router;