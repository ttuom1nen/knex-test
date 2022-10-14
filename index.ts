import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import db from "./data/db.js";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.get("/todos", async (req, res) => {
  const todos = await db("todo");
  res.json({ todos });
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
