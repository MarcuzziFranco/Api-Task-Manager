import express from "express";

import taskRouter from "./routes/taskRouter";

const app = express();

app.use(express.json()); //middleware que transforma el request body en json.

app.use("/api/task", taskRouter);
const PORT = 3001;

app.get("/ping", (_req, res) => {
  console.log("someone pinged here!! " + new Date().toLocaleDateString());
  res.send("pong");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
