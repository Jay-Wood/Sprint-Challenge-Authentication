const auth = require("./auth-router.js");
const Users = require("../users/userModel.js");
const request = require("supertest");
const server = require("../api/server.js");
const db = require("../database/dbConfig.js");

describe("authRouter", () => {

    beforeEach(async () => {
        await db("users").truncate();
    })

    it("should set env to testing", () => {
        expect(process.env.DB_ENV).toEqual("testing")
    })

    it("adds new users", async () => {
        await Users.add({
            username: "Pirate1", 
            password: "pass"
        });
        await Users.add({
            username: "Pirate2", 
            password: "pass"
        });

        const updatedUsers = await db("users");

        expect(updatedUsers).toHaveLength(2);
    })

})
