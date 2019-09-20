const db = require("../database/dbConfig.js");

module.exports = {
    getUsers, 
    getById,
    getByName,
    add
}

function getUsers() {
    return db("users")
}

function getById(id) {
    return db("users")
        .where("id", id)
        .first();
}

function getByName(filter) {
    return db("users")
        .where(filter)
        .first()
}

function add(user) {
    return db("users")
        .insert(user, "id")
        .then(id => {
            return (getById(id[0]))
        })
}