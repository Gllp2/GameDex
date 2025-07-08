const { findGames } = require("../data/games");

async function getGames() {
    return await findGames()
}

module.exports = { getGames }