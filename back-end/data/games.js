const { GetCollection } =  require("./mongodb")

const collName = "Games"

async function  findGames() {
    const col = await GetCollection(collName)
    const result = await col.find()
    return result
}

async function findGame(id) {
    const col = await GetCollection(collName)
    const result = await col.findOne({_id: id})
    return result
}

module.exports = {findGames, findGame}