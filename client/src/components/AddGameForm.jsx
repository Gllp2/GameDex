import React, { useState, useEffect } from 'react';
import '../styles/AddGameForm.css';


const AddGameForm = ({ onAdd }) => {
   const [formData, setFormData] = useState({
        title: '',
        image: '',
        year: '',
        genre: '',
        platform: '',
        price: '',
        boughtPrice: ''
    });

    const [availableTitles, setAvailableTitles] = useState([]);
    const [availablePlatforms, setAvailablePlatforms] = useState([]); 


    // Buscar títulos e plataformas da base de dados
    useEffect(() => {
        fetch('/api/games') // Substitua pela sua rota real
            .then(res => res.json())
            .then(data => setAvailableTitles(data))
            .catch(err => console.error('Erro ao buscar títulos:', err));

        fetch('/api/platforms') // Substitua pela sua rota real
            .then(res => res.json())
            .then(data => setAvailablePlatforms(data))
            .catch(err => console.error('Erro ao buscar plataformas:', err));
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { title, image, year, genre, platform, price, boughtPrice } = formData;
        if (!title || !image || !year || !genre || !platform || !price || !boughtPrice) {
            alert('Por favor preencha todos os campos.');
            return;
        }

        onAdd(formData);

        setFormData({
            title: '',
            image: '',
            year: '',
            genre: '',
            platform: '',
            price: '',
            boughtPrice: ''
        });
    };

    return (
        <form className="add-game-form" onSubmit={handleSubmit}>
            <h2>Adicionar Novo Jogo</h2>

            {/* Título do Jogo - carregado via fetch */}
            <select name="title" value={formData.title} onChange={handleChange} required>
                <option className='option-select' value="">Selecione um jogo</option>
                {availableTitles.map(game => (
                    <option key={game.id} value={game.title}>{game.title}</option>
                ))}
            </select>

        


            

            {/* Plataforma - carregada via fetch */}
            <select name="platform" value={formData.platform} onChange={handleChange} required>
                <option className='option-select' value="">Selecione a Plataforma</option>
                {availablePlatforms.map(platform => (
                    <option key={platform.id} value={platform.name}>{platform.name}</option>
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