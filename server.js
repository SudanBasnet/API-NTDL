import express from "express";
import taskRouter from "./src/routers/taskRouter.js";
import morgan from "morgan";
import cors from "cors";

//connect Mongodb
import { connectMongoDb } from "./src/config/dbConfig.js";
connectMongoDb();

const app = express();
const PORT = 8000;

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

//static serving

import path from "path";
const __dirname = path.resolve();
// serve the static files from the node
app.use(express.static(path.join(__dirname, "dist")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});
console.log(__dirname);

app.use;
app.use("/api/v1/tasks", taskRouter);

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`server is running at http://localhost:${PORT}`);
});
