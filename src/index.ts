import express from "express";

import taskRouter from "./routes/taskRouter";

const PORT = 3001;
const cors = require("cors");

const app = express();
app.use(cors()); // enable allow domian policy cors
app.use(express.json()); //middleware que transforma el request body en json.

app.use("/api/task", taskRouter);

app.get("/ping", (_req, res) => {
  console.log("someone pinged here!! " + new Date().toLocaleDateString());
  res.send("pong");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
