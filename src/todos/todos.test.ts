const request = require("supertest");
const baseURL = "http://localhost:3008";

describe("GET /todos", () => {
  it("return 200", async () => {
    const response = await request(baseURL).get("/todos");
    expect(response.statusCode).toBe(200);
  });

  it("return todos", async () => {
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
