import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

import todosRouter from "./src/todos/todos.routes";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(express.json());
app.use(todosRouter);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
