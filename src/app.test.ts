import request from "supertest";
import app from "./app";

describe("App", () => {
    it("Should works properly", () => {
        // unit test
    });
    it("Should return 200 status code", async () => {
        const response = await request(app).get("/");
        expect(response.statusCode).toBe(200);
    });
});
