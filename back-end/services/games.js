const { findGames, findGame } = require("../data/games");

async function getGames() {
    return await findGames()
}

async function getGame(id) {
    return await findGame(id)
}

module.exports = { getGames, getGame }