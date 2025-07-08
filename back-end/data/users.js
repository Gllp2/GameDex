const { GetCollection } =  require("./mongodb")

const collName = "users"

async function insertUser(user) {
    const col = await GetCollection(collName)
    const result = await col.insertOne(user)
    return result.insertedId
}

async function findUser(userName) {
    const col = await GetCollection(collName)
    const result = await col.findOne({userName : userName})
    return result
}


module.exports = {insertUser, findUser}