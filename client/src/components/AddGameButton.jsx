import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/AddGameButton.css';

const AddGameButton = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/AddGame');
    }

    return (
        <button className="add-game-button" onClick={ handleClick } title="Adicionar Jogo">
            +
        </button>
    )
} 


export default AddGameButton;