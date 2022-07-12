import express from "express";

const router = express.Router();

router.get("/", (_req, res) => {
  res.send("Get list tasks");
});

router.post("/", (_req, res) => {
  res.send("Create new task");
});

export default router;
