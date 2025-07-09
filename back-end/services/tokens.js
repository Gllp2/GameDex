const { insertToken, findToken } = require("../data/tokens");

async function createToken(user){
    if(user && user !== null){
        return await insertToken(user._id)
    }
    return null
}

async function verifyToken(id) {
    const res = await findToken(id)
    if(res === undefined || res == null) {
        return false
    }
    return true
}

module.exports = {createToken, verifyToken}