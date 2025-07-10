import Header from "../components/Header";
import '../styles/Library.css';
import GameCard from "../components/GameCard";
import AddGameButton from "../components/AddGameButton";
import FloatingLogosBackground from '../components/floating-logos-background';
import LibraryFilters from "../components/LibraryFilters";


const Library = () => {
    return(
        <>
        <Header />
        <FloatingLogosBackground />
       <LibraryFilters />
        <div className="library-container">
            <h1 className="library-title"> Your game library</h1>
            <div className="library-grid">
              <GameCard title={"Teste"}/> <GameCard/> 
              <GameCard /> <GameCard/>
              <GameCard /> <GameCard />
              <GameCard /> <GameCard />       
              </div>
        </div>
              <AddGameButton />

        
        
        </>
    )
} 



export default Library;