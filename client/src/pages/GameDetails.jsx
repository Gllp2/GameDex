import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../styles/GameDetails.css'
import GameCard from '../components/GameCard';
import FloatingLogosBackground from '../components/floating-logos-background';
 

const GameDetailsPage = () => {
    const navigate = useNavigate();
    const { id } = useParams(); // Now matches the route param
    const [game, setGame] = useState(null);
    const [userGames, setUserGames] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const token = localStorage.getItem('token');
                const gameRes = await fetch(`http://localhost:3032/api/games/${id}`, {
                    headers: { Authorization: token }
                });
                const gameData = await gameRes.json();
                setGame(gameData);

                const userRes = await fetch('http://localhost:3032/api/users/me', {
                    headers: { Authorization: token }
                });
                const userData = await userRes.json();
                setUserGames(userData.games || []);
            } catch (err) {
                console.log(err)
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (!game) return <div>Game not found.</div>;

    const ownedGame = userGames.find(g => String(g.game_id) === String(id));
    return (
        <>
            <FloatingLogosBackground />
            <div className="game-details-container"> 
                <GameCard
                    _id={game._id}
                    title={game.name}
                    platform={game.platforms?.join(', ')}
                    cover={game.cover}
                />
                <h1 className="game-details-title">{game?.name || 'Game Title'}</h1>
                <div className="game-details-content">
                    <p className="game-details-genre">{game?.genre || "Unknown"}</p>
                    <p className="game-details-platform">{game?.platforms?.join(', ') || "Unknown"}</p>
                    <p className="game-details-price">{game?.price ? `${game.price}` : "Unknown"}</p>
                    {ownedGame ? (
                        <p className="game-details-bought">You Bought this at: {ownedGame.user_value}</p>
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
    