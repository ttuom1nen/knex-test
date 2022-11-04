const request = require("supertest");
const baseURL = "http://localhost:3008";

describe("Todos endpoints", () => {
  describe("GET /todos", () => {
    it("returns 200", async () => {
      const response = await request(baseURL).get("/todos");
      expect(response.statusCode).toBe(200);
    });

    it("returns todos", async () => {
      const response = await request(baseURL).get("/todos");
      expect(response.body.length >= 1).toBe(true);
    });
  });

  describe("POST /todos", () => {
    const newTodo = { task: "New task created by test" };

    it("returns the id of inserted todo", async () => {
      const response = await request(baseURL)
        .post("/todos")
        .set("Content-type", "application/json")
        .send(newTodo);

      expect(response.body[0].hasOwnProperty("id")).toBe(true);
    });
  });

  describe("PATCH /todos", () => {
    const todo = { id: 1, task: "Modified task" };

    it("modifies existing todo", async () => {
      const response = await request(baseURL)
        .post("/todos")
        .set("Content-type", "application/json")
        .send(todo);

      expect(response.statusCode).toBe(200);
    });
  });
});
