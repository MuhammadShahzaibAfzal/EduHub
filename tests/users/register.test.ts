import request from "supertest";
import app from "../../src/app";

describe("POST /auth/register", () => {
    describe("Happy Path", () => {
        it("should return 201 status code", async () => {
            // AAA
            // Arrange
            const userData = {
                firstName: "John",
                lastName: "Doe",
                email: "johndoe@gmail.com",
                password: "secret",
            };
            // Act (test trigger i.e call endpoint)
            const result = await request(app)
                .post("/auth/register")
                .send(userData);
            // Assert
            expect(result.statusCode).toBe(201);
        });
    });

    describe("Sad Path", () => {});
});
