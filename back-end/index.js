const express = require("express")
const { createUser, GetUser } = require("./services/users")
const { createToken } = require("./services/tokens")
const { getGames, getGame } = require("./services/games")
const { ObjectId } = require("mongodb")
const app = express()
const port = 3031
const tokens= []
app.use(express.json())

app.post("/api/signup", async (req, res) => {
    const body = req.body
    const error = {
        message: "Os dados introduzidos não são válidos.",
        errors: {}
    }
    if (body.password != body.passwordConfirmation) {
        error.errors.password = "As passwords não coincidem."
        console.log(error)
    }
    if (Object.hasOwn(error.errors, "password")) {
        return res.status(400).json(error)
    } else {
        const create = {
            email: body.email,
            username: body.username,
            password: body.password,
            games: []
        }
        const id = await createUser(create)
        const message = {
            message: "Utilizador criado com Sucesso!",
            id : id
        }
        return res.status(201).json(message)
    }
})

app.get("/api/auth/login", async (req, res) => {
    const {username, password} = req.body;

    const user = await GetUser(username)

    const token = await createToken(user)

    if(token === null){
        return res.status(403).json({message: "ERRO"})
    }
    return res.status(200).json({token: token})

}) 
app.get("/api/games", async (req, res) => {
    const games = await getGames()
    return res.status(200).json(games)
})

app.get("/api/games/:id", async (req, res) => {
    const gameId = req.params.id
    console.log(gameId)
    const game = await getGame(gameId)
    return res.status(200).json(game)
})


app.listen(port, () => {
    console.log(`Listening on https://localhost:${port}`)
})