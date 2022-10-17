import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("todos").del();

    // Inserts seed entries
    await knex("todos").insert([
        { id: 1, task: "rowValue1" },
        { id: 2, task: "rowValue2" },
        { id: 3, task: "rowValue3" }
    ]);
};
