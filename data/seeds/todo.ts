import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("todo").del();

    // Inserts seed entries
    await knex("todo").insert([
        { id: 1, task: "rowValue1" },
        { id: 2, task: "rowValue2" },
        { id: 3, task: "rowValue3" }
    ]);
};
