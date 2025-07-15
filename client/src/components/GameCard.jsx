import React from 'react';
import '../styles/GameCard.css';
import { useNavigate } from 'react-router-dom';

const GameCard = ({ title, platform, _id, cover }) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/game/${_id}`);
    };
    return (
        <div
            className="game-card"
            onClick={handleClick}
            style={{
                backgroundImage: `url(${cover})`,
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}
        >
            <div className="game-card-blur" />
            <div className="game-card-overlay">
                <h2 className="gaming-card-title">{title}</h2>
                <h2 className='gaming-card-platform'>{platform}</h2>
            </div>
        </div>
    );
};
export default GameCard;