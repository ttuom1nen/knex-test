import express, { Request, Response } from "express";
import knex from "../../data/db.js";
import { Todo } from "../../models";
import { validateBody } from "../middleware/validateBody.js";
import { todosSchema } from "./todos.schema.js";

const todosRouter = express.Router();

todosRouter.get(
  "/todos",
  async (req: Request, res: Response): Promise<void> => {
    const todos: Todo[] = await knex("todos");

    res.status(200).send(todos);
  }
);

todosRouter.post(
  "/todos",
  validateBody<Todo>(todosSchema),
  async (req: Request, res: Response): Promise<void> => {
    const { task } = req.body;

    const id: Todo = await knex("todos").insert({ task }).returning("id");

    res.status(200).send(id);
  }
);

export default todosRouter;
