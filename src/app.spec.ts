import * as request from "supertest";

import app from "./app";

describe("GET /", () => {
  it("should return 200 OK", () => {
    return request(app)
      .get("/")
      .expect(200)
      .then(res => {
        expect(res.text).toBe("Hello world");
      });
  });
});
