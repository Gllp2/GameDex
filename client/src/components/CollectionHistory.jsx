import { useEffect, useState } from 'react';
import { FaPlaystation } from 'react-icons/fa';


export default function CollectionHistory({ games }) {
  const [game, setGame] = useState('');
  const [earliestGame, setEarliestGame] = useState(null);

  useEffect(() => {
    if (!games || games.length === 0) return;

    // Find the earliest game
    const earliest = games.reduce((earliest, game) => {
      if (!earliest) return game;
      return new Date(game.timestamp) < new Date(earliest.timestamp) ? game : earliest;
    }, null);

    setEarliestGame(earliest);

    // Fetch the game details to get the title
    async function fetchGameTitle() {
      if (earliest && earliest.game_id) {
        const res = await fetch(`http://localhost:3031/api/games/${earliest.game_id}`, {
          headers: { Authorization: localStorage.getItem('token') }
        });
        if (res.ok) {
          const gameData = await res.json();
          setGame(gameData);
        }
      }
    }
    fetchGameTitle();
  }, [games]);

  if (!earliestGame) {
    return <div className="collection-history">No games found.</div>;
  }
  
  return (
    <div className="collection-history">
      <h2 className="collection-title">COLLECTION HISTORY</h2>
      <div className="history-content">
        <div className="history-info">
          <p className="first-game-text">This was your<br />first game!</p>
          <p className="bought-date">You bought it in<br />{earliestGame.timestamp ? new Date(earliestGame.timestamp).toLocaleDateString() : "Unknown"}</p>
          <div className="price-comparison">
            <div>
              <p>You<br />bought it<br />for</p>
              <span className="price">{earliestGame.user_value || "Unknown"}</span>
            </div>
            <div className="divider" />
            <div>
              <p>Today its<br />valued<br />for</p>
              <span className="price">{game.price}</span>
            </div>
          </div>
        </div>
        <div className="history-image">
          <div className="game-placeholder" />
          <div className="game-title">
            <strong>{game.name}</strong>
            <FaPlaystation style={{ marginLeft: '8px' }} />
          </div>
        </div>
      </div>
    </div>
  );
}
