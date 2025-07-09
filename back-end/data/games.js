const { ObjectId } = require("mongodb")
const { GetCollection } =  require("./mongodb")

const collName = "Games"

async function  findGames() {
    const col = await GetCollection(collName)
    const result = await col.find().toArray()
    return result
}

async function findGame(id) {
    const new_id = new ObjectId(id)
    const col = await GetCollection(collName)
    const result = await col.findOne({_id: new_id})
    return result
}

module.exports = {findGames, findGame}