const { findPublisher } = require("../data/publisher");

async function getPublisher() {
    return await findPublisher()
}

module.exports = { getPublisher }