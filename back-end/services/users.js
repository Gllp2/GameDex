const { insertUser, findUser } = require("../data/users");

async function createUser(data) {
    return await insertUser(data)
}

async function GetUser(userName) {
    return await findUser(userName)
}



module.exports = {createUser, GetUser}
