import express, { Request, Response } from "express";
import knex from "../../data/db.js";
import { Todo } from "../../models";

const todosRouter = express.Router();

todosRouter.get("/", async (req: Request, res: Response): Promise<void> => {
  const todos: Todo[] = await knex("todos");
  res.send(todos);
});

export default todosRouter;
