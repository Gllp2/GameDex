"use client";
import React, { useState, useEffect } from "react";
import "../styles/AddGameForm.css";

//mapa título - ID (o utilizador escolhe o título [background será buscado o ID])

const AddGameForm = ({ onAdd }) => {
    const [games, setGames] = useState([]);

    setGames(async function fetchGames() {
        const gamesJson = await fetch("http://localhost:3031/api/games", {
            method: "GET",
            headers: {
                Authorization: localStorage.getItem("token"),
            },
        }).map((e) => {
            JSON.parse(e);
        });
    });

    const [formData, setFormData] = useState({
        gameId: "",
        platform: "",
        boughtPrice: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch("http://localhost:3031/api/users", {
            body: JSON.stringify(formData),
            method: "PATCH",
            headers: {
                Authorization: localStorage.getItem("token"),
            },
        });

        if (res.status !== 200) {
            return alert("ERRO");
        }

        return;
    };

    const [availableTitles, setAvailableTitles] = useState([]);
    const [availablePlatforms, setAvailablePlatforms] = useState([]);

    // Buscar títulos e plataformas da base de dados
    useEffect(() => {
        fetch("/api/games")
            .then((res) => res.json())
            .then((data) => setAvailableTitles(data))
            .catch((err) => console.error("Erro ao buscar títulos:", err));

        fetch("/api/platforms") // Substitua pela sua rota real
            .then((res) => res.json())
            .then((data) => setAvailablePlatforms(data))
            .catch((err) => console.error("Erro ao buscar plataformas:", err));
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <form className="add-game-form" onSubmit={handleSubmit}>
            <h2>Adicionar Novo Jogo</h2>

            {/* Título do Jogo - carregado via fetch */}
            <select
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
            >
                <option className="option-select" value="">
                    Selecione um jogo
                </option>
                {availableTitles.map((games) => (
                    <option key={games._id} value={games.name}>
                        {games.name}
                    </option>
                ))}
            </select>

            {/* Plataforma - carregada via fetch */}
            <select
                name="platform"
                value={formData.platform}
                onChange={handleChange}
                required
            >
                <option className="option-select" value="">
                    Selecione a Plataforma
                </option>
                {availablePlatforms.map((platform) => (
                    <option key={platform.id} value={platform.name}>
                        {platform.name}
                    </option>
                ))}
            </select>

            {/* Preço Comprado */}
            <input
                type="number"
                name="boughtPrice"
                placeholder="Preço que Pagaste (€)"
                value={formData.boughtPrice}
                onChange={handleChange}
                required
            />

            <button type="submit">Adicionar à tua Biblioteca</button>
        </form>
    );
};

export default AddGameForm;
