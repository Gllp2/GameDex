const { insertUser, findUser } = require("../data/users");

async function createUser(data) {
    return await insertUser(data)
}

async function getUser(user) {
    return await findUser(user)
}

module.exports = {createUser, getUser}