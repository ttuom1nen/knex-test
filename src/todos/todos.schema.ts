import * as yup from "yup";
import { SchemaOf } from "yup";
import { Todo } from "../../models";

export const todosSchema: SchemaOf<Todo> = yup.object().shape({
  id: yup.number(),
  task: yup.string().required(),
  created_at: yup.date().nullable(),
  updated_at: yup.date().nullable(),
});
