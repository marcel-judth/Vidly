const mongoose = require("mongoose");
const request = require("supertest");

let server;

describe("/api/genres", () => {
  beforeEach(() => {
    server = require("../../index");
  });

  afterEach((done) => {
    return server.close(done);

    // Mongoose.connections.forEach(async (con) => {
    //   await con.close();
    // });

    // await mongoose.disconnect();
  });
  afterAll(async () => {
    await mongoose.connection.close();
  });

  describe("GET /", () => {
    it("should return all genres", async () => {
      const res = await request(server).get("/api/genres");
      expect(res.status).toBe(200);
    });
  });
});
