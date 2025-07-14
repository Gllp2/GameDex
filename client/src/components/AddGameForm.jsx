"use client";
import React, { useState, useEffect } from "react";
import "../styles/AddGameForm.css";

const AddGameForm = ({ onAdd }) => {
    const [games, setGames] = useState([]);
    const [platforms, setPlatforms] = useState([]);

    useEffect(() => {
        async function fetchGames() {
            const response = await fetch("http://localhost:3032/api/games", {
                method: "GET",
                headers: {
                    Authorization: localStorage.getItem("token"),
                },
            });
            const gamesJson = await response.json();
            setGames(gamesJson);
        }
        fetchGames();
    }, []);

    const [formData, setFormData] = useState({
        gameId: "",
        platform: "",
        boughtPrice: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            gameId: formData.gameId,
            platform: formData.platform,
            price: formData.boughtPrice,
        };

        console.log("Submitting payload:", payload);

        const res = await fetch("http://localhost:3032/api/users", {
            body: JSON.stringify(payload),
            method: "PATCH",
            headers: {
                Authorization: localStorage.getItem("token"),
                "content-type": "application/json",
            },
        });

        if (res.status !== 200) {
            const errorData = await res.json();
            alert(errorData.message || "ERRO");
            return;
        }

        // Success: reset form, notify user, and call onAdd
        setFormData({
            gameId: "",
            platform: "",
            boughtPrice: "",
        });
        setPlatforms([]);
        alert("Game added to your library!");
        if (onAdd) onAdd();
    };

    const handleGameChange = (e) => {
        const selectedGameName = e.target.value;
        const selectedGame = games.find((game) => game.name === selectedGameName);
        setFormData((prevData) => ({
            ...prevData,
            gameId: selectedGame ? selectedGame._id : "",
            platform: "",
        }));
        setPlatforms(selectedGame ? selectedGame.platforms : []);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <form className="add-game-form" onSubmit={handleSubmit}>
            <h2>Add New Game</h2>

            <select
                name="title"
                value={formData.gameId ? games.find(g => g._id === formData.gameId)?.name : ""}
                onChange={handleGameChange}
                required
            >
                <option className="option-select" value="">
                    Select A Game
                </option>
                {games.map((game) => (
                    <option key={game._id} value={game.name}>
                        {game.name}
                    </option>
                ))}
            </select>

            <select
                name="platform"
                value={formData.platform}
                onChange={handleChange}
                required
            >
                <option className="option-select" value="">
                    Select The Platform
                </option>
                {platforms.map((platform, idx) => (
                    <option key={idx} value={platform}>
                        {platform}
                    </option>
                ))}
            </select>

            <input
                type="number"
                name="boughtPrice"
                placeholder="Bought Price (€)"
                value={formData.boughtPrice}
                onChange={handleChange}
                required
            />

            <button type="submit">Add To Library</button>
        </form>
    );
};

export default AddGameForm;
