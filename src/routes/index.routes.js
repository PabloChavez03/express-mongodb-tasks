import { Router } from "express";

import {
  createTask,
  deleteTask,
  editTask,
  renderTaskEdit,
  renderTasks,
  taskToogleDone,
} from "../controllers/task.controller";

const router = Router();

router.get("/", renderTasks);

router.post("/tasks/add", createTask);

router.get("/tasks/:id/edit", renderTaskEdit);

router.post("/tasks/:id/edit", editTask);

router.get("/tasks/:id/delete", deleteTask);

router.get("/tasks/:id/toogleDone", taskToogleDone);

export default router;
