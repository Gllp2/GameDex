const { GetCollection } =  require("./mongodb")

const collName = "Games"

async function  findGames() {
    const col = await GetCollection(collName)
    const result = await col.find()
    return result
}

module.exports = {findGames}