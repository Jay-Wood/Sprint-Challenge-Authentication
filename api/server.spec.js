const request = require("supertest");
const server = require("./server.js");

describe("server.js", () => {

    describe("GET /", () => {

        it("returns 200", () => {
            return request(server)
                .get("/")
                .then(res => {
                    expect(res.status).toBe(200)
                })
        })
    
        it("returns json", () => {
            return request(server)
                .get("/")
                .then(res => {
                    expect(res.type).toMatch(/json/i)
                })
        })
    
    })

})