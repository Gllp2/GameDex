import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/GameDetails.css'
import GameCard from '../components/GameCard';
import FloatingLogosBackground from '../components/floating-logos-background';
 

const GameDetailsPage = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [game, setGame] = useState(null);
    const [userGames, setUserGames] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            const token = localStorage.getItem('token');
            // Fetch game details
            const gameRes = await fetch(`/api/games/${id}`, {
                headers: { Authorization: token }
            });
            const gameData = await gameRes.json();
            setGame(gameData);

            // Fetch user games
            const userRes = await fetch('/api/users/me', {
                headers: { Authorization: token }
            });
            const userData = await userRes.json();
            setUserGames(userData.games || []);
            setLoading(false);
        }
        fetchData();
    }, [id]);

    if (loading) return <div>Loading...</div>;

    const ownedGame = userGames.find(g => g.game_id === id);
    return (
        <>

            <FloatingLogosBackground />
            <div className="game-details-container"> 
                <GameCard game={game}/>
                <h1 className="game-details-title">{game?.title || 'Game Title'}</h1>
                <div className="game-details-content">
                    <img src="https://via.placeholder.com/150" alt="Game Cover" className="game-details-image" />
                    <p className="game-details-year">{game?.year || "Unknown"}</p>
                    <p className="game-details-genre">{game?.genre || "Unknown"}</p>
                    <p className="game-details-platform">{game?.platforms?.join(', ') || "Unknown"}</p>
                    <p className="game-details-price">{game?.price ? `${game.price}$` : "Unknown"}</p>
                    {ownedGame ? (
                        <p className="game-details-bought">You Bought this at: {ownedGame.user_value}$</p>
                    ) : (
                        <p className="game-details-bought" style={{ color: 'red' }}>You don't own this game.</p>
                    )}
                </div>
                <button onClick={() => navigate('/library')} className="back-to-library-button">Back to Library</button>
            </div>
        </>
    )
}




export default GameDetailsPage; 
    