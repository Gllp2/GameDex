const { findToken } = require("../data/tokens");
const { insertUser, findUser, updateUser: updateUserData, findUserById } = require("../data/users");

async function createUser(data) {
    return await insertUser(data)
}

async function GetUser(userName) {
    return await findUser(userName)
}

async function updateUser(update, tokenId) {
    const token =  await findToken(tokenId)
    const user = await findUserById(token.uid)
    const newUpdate = [...user.games, update]
    if (user.games.some(g => String(g.game_id) === String(update.gameId))) {
    return "User already owns this game";
    }
    return await updateUserData(user.username, newUpdate)
}



module.exports = {createUser, GetUser, updateUser}
