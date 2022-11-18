import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.alterTable("todos", (tbl) => {
    tbl.timestamp("created_at");
    tbl.timestamp("updated_at");
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.alterTable("todos", (tbl) => {
    tbl.dropColumn("created_at");
    tbl.dropColumn("updated_at");
  });
}
