const { findPublisher } = require("../data/games");

async function getPublisher() {
    return await findPublisher()
}

module.exports = { getPublisher }