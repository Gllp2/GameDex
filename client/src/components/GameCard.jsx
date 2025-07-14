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
            <div className="game-card-content">
                <div  style={{backgroundColor: "white", width: "100%", height: "100%", opacity: 0.8, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "2px", borderRadius: "10px"}}>
                    <h2 className="gaming-card-title">{title}</h2>
                    <h2 className='gaming-card-platform'>{platform}</h2>
                </div>
            </div>
        </div>
    );
};
export default GameCard;