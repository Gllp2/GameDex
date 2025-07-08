const { insertUser, findUser } = require("../data/users");

async function createUser(data) {
    return await insertUser(data)
}

async function GetUser() {
    return await findUser()
}

module.exports = {createUser, GetUser}