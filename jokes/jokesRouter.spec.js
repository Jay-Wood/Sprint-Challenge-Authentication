const Jokes = require("../jokes/jokes-router.js");
const request = require("supertest");
const jokesServer = "https://icanhazdadjoke.com/search";
const server = require("../api/server.js");
const axios = require("axios");
const router = require('express').Router();

describe("jokes router", () => {

    it("jokesServer api is working", async () => {
        const requestOptions = {
            headers: { accept: 'application/json' },
        };
        
        return axios
            .get(jokesServer, requestOptions)
            .then(res => {
                expect(res.status).toBe(200)
            })

    })

    it("jokes route requires auth", function (done) {
        request(server)
            .get('/api/jokes')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(401, done);
    });

})