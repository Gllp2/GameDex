import { useNavigate } from 'react-router-dom';
import '../styles/GameDetails.css'
import GameCard from '../components/GameCard';
import FloatingLogosBackground from '../components/floating-logos-background';
 

const GameDetailsPage = () => {
       const navigate = useNavigate();
    
   
    

    return (
        <>
        <FloatingLogosBackground />
      
        <div className="game-details-container"> 

            <GameCard/>
            <h1 className="game-details-title">Game Title</h1>
            <div className="game-details-content">
                <img src="https://via.placeholder.com/150" alt="Game Cover" className="game-details-image" />
                <p className="game-details-description">This is a detailed description of the game. It includes information about the gameplay, story, and features.</p>
                <p className="game-details-year">Release Year: 2023</p>
                <p className="game-details-genre">Genre: Action/Adventure</p>
                <p className="game-details-platform">Platform: PC, PS5, Xbox Series X</p>
                <p className="game-details-price">Market Price: 99.99$</p>
                <p className="game-details-bought">You Bought this at: 49.99$</p>
            </div>
            <button onClick={() => navigate('/library')} className="back-to-library-button">Back to Library</button>
        
        
        </div>
        </>
      
    )
}




export default GameDetailsPage; 
    