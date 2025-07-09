const { GetCollection } =  require("./mongodb")

const collName = "Users"

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

async function updateUser(userName, update) {
    const col = await GetCollection(collName)
    const result = await col.updateOne(
        { userName: userName},
        { $set: {games: update}}
    )
    return result.modifiedCount > 0
}


module.exports = {insertUser, findUser, updateUser};