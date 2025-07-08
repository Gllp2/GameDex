const { GetCollection } =  require("./mongodb")

const collName = "Users"

async function insertUser(user) {
    const col = await GetCollection(collName)
    const result = await col.insertOne(user)
    return result.insertedId
}

async function  findUser() {
    const col = await GetCollection(collName)
    const result = await col.findOne({"$username" : user})
    return result
}

module.exports = {insertUser, findUser}