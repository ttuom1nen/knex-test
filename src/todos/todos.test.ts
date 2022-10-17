const request = require("supertest");
const baseURL = "http://localhost:3008";

describe("GET /todos", () => {
  it("should return 200", async () => {
    const response = await request(baseURL).get("/todos");
    expect(response.statusCode).toBe(200);
  });

  it("should return todos", async () => {
    const response = await request(baseURL).get("/todos");
    expect(response.body.length >= 1).toBe(true);
  });
});
