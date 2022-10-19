import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("todos").del();

  // Inserts seed entries
  await knex("todos").insert([
    { task: "rowValue1" },
    { task: "rowValue2" },
    { task: "rowValue3" },
  ]);
}
