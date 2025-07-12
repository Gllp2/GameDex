const express = require("express")
const { getGames, getGame } = require("./services/games")
const { createUser, GetUser, updateUser } = require("./services/users");
const { createToken, verifyToken, removeToken } = require("./services/tokens");
const { getPublisher } = require("./services/publisher");
const app = express();
const port = 3031;
const cors = require("cors")
app.use(express.json());

app.use(cors())

app.post("/api/signup", async (req, res) => {
    const body = req.body;
    const error = {
        message: "Os dados introduzidos não são válidos.",
        errors: {},
    };
    if (body.password != body.passwordConfirmation) {
        error.errors.password = "As passwords não coincidem.";
    }
    if (Object.hasOwn(error.errors, "password")) {
        return res.status(400).json(error);
    } else {
        const create = {
            email: body.email,
            username: body.username,
            password: body.password,
            games: [],
        };
        const id = await createUser(create);
        const message = {
            message: "Utilizador criado com Sucesso!",
            id: id,
        };
        return res.status(201).json(message);
    }
});

app.post("/api/auth/login", async (req, res) => {
    const { username, password } = req.body;
    
    const user = await GetUser(username)

    const token = await createToken(user)

    if (token === null) {
        return res.status(403).json({ message: "ERRO" });
    } else if (user.password === password) {
        return res.status(200).json({ token: token });
    }
});

app.get("/api/games", async (req, res) => {

    const token = req.headers.authorization

    if ( verifyToken(token) === false) {
        return res.status(403).json({message:`Invalid token.`})
    }
    const games = await getGames();
    return res.status(200).json(games);
});

app.get("/api/publishers", async (req, res) => {
    
    const token = req.headers.authorization
    
    if ( verifyToken(token) === false) {
        return res.status(403).json({message: `Token not found`})
    }

    const publishers = await getPublisher();
    return res.status(200).json(publishers)
})

app.get("/api/games/:id", async (req, res) => {

    const token = req.headers.authorization
    
    if ( verifyToken(token) === false) {
        return res.status(403).json({message: `Token not found`})
    }

    const gameId = req.params.id
    const game = await getGame(gameId)
    return res.status(200).json(game)
})



app.patch("/api/users/", async (req, res) => { //add game
    const body = req.body
    const token = req.headers.authorization
    
    if ( verifyToken(token) === false) {
        return res.status(403).json({message: `Token not found`})
    }

    try {
        
        const games = {
            game_id: body.gameId,
            user_value: body.price,
            platform: body.platform,
            timestamp: new Date()
        }

        const result = await updateUser(games, token);

        if (typeof(result) == "string") {
            return res.status(400).json({ message: result })
        }

        return res.status(200).json({
                message: "Jogo adicionado ao utilizador.",
        });
    } catch (err) {
        return res.status(500).json({ message: "Erro ao atualizar utilizador." });
    }
});

app.delete("/api/logout/", async (req, res) => {
    const token = req.headers.authorization
    
    if ( verifyToken(token) === false) {
        return res.status(403).json({message: `Token not found`})
    }

    await removeToken(token)

    return res.status(200).json({message: "Success"})
})

app.get("/api/users/me", async (req, res) => {
    const token = req.headers.authorization;
    if (await verifyToken(token) === false) {
        return res.status(403).json({ message: "Invalid token." });
    }
    const tokenData = await findToken(token);
    const user = await findUserById(tokenData.uid);
    if (!user) {
        return res.status(404).json({ message: "User not found." });
    }
    return res.status(200).json(user);
});

app.listen(port, () => {
    console.log(`Listening on https://localhost:${port}`);
});
