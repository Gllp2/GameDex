const { GetCollection } =  require("./mongodb")

const collName = "Publishers"

async function  findPublisher() {
    const col = await GetCollection(collName)
    const result = await col.find()
    return result
}

module.exports = {findPublisher}