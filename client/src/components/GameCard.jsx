import React from 'react';
import '../styles/GameCard.css';
import { redirect, useNavigate } from 'react-router-dom';

const GameCard = ({ title, description, image, year, genre, platform }) => {
    const navigate = useNavigate()
    const handleClick = () => { 
        navigate(`/game/${title}`);
    };
    return ( 
        <div className = "game-card" onClick={handleClick}>
            <img src = {image} alt={title} className="gaming-card-image" />
            <div className="game-card-content">
                <h2 className ="gaming-card-title">{title}</h2>
                <p className="gaming-card-description">{description}</p>
                </div>
        </div>
    )
} 

export default GameCard;