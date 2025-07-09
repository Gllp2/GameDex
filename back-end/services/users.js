const { insertUser, findUser, updateUser: updateUserData } = require("../data/users");

async function createUser(data) {
    return await insertUser(data)
}

async function GetUser(userName) {
    return await findUser(userName)
}

async function updateUser(userName, update, user) {
    const newUpdate = [...user.games, update]
    return await updateUserData(userName, newUpdate)
}



module.exports = {createUser, GetUser, updateUser}
