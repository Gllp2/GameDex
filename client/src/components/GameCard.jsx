import React from 'react';
import '../styles/GameCard.css';
import { useNavigate } from 'react-router-dom';

const GameCard = ({ title, platform, _id }) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/game/${_id}`);
    };
    return ( 
        <div className = "game-card" onClick={handleClick}>
            {//<img src = {image} alt={title} className="gaming-card-image" />
            }
            <div className="game-card-content">
                <h2 className ="gaming-card-title">{title}</h2>
                <h2 className='gaming-card-platform'>{platform || "Unknown Platform"}</h2>
                </div>
        </div>
    )
} 

export default GameCard;