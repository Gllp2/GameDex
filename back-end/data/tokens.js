const { ObjectId } = require("mongodb")
const { GetCollection } = require("./mongodb")


const COLLECTION = "tokens"

async function insertToken(userId) {
    const col = await GetCollection(COLLECTION)

    const res = await col.insertOne({uid: userId})

    return res.insertedId
}


async function findToken(token) {
    const new_token = new ObjectId(String(token))

    const col = await GetCollection(COLLECTION)

    const res = await col.findOne({_id: new_token})

    return res
}


module.exports = {insertToken, findToken}