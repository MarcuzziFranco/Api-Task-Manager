import express from "express";
import { getTasks, addTask } from "../services/taskService";

const router = express.Router();

router.get("/", (_req, res) => {
  res.send(getTasks());
});

router.post("/", (_req, res) => {
  addTask();
  res.send("Create new task");
});

export default router;
