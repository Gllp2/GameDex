import { useEffect, useState } from "react";
import Header from "../components/Header";
import "../styles/Library.css";
import GameCard from "../components/GameCard";
import AddGameButton from "../components/AddGameButton";
import FloatingLogosBackground from "../components/floating-logos-background";
import LibraryFilters from "../components/LibraryFilters";

const Library = () => {
  const [userGames, setUserGames] = useState([]);
  const [allGames, setAllGames] = useState([]);
  const [filters, setFilters] = useState({
    order: "A-Z",
    platforms: {
      "Ps Store": false,
      Steam: false,
      "Epic Games": false,
      "Nintendo Store": false,
      Xbox: false,
    },
    price: "all",
  });

  useEffect(() => {
    async function fetchUserAndGames() {
      // Fetch user (with games array)
      const userRes = await fetch("http://localhost:3032/api/users/me", {
        headers: { Authorization: localStorage.getItem("token") },
      });
      const userData = await userRes.json();
      setUserGames(userData.games || []);

      // Fetch all games for lookup
      const gamesRes = await fetch("http://localhost:3032/api/games", {
        headers: { Authorization: localStorage.getItem("token") },
      });
      const gamesData = await gamesRes.json();
      setAllGames(gamesData);
    }
    fetchUserAndGames();
  }, []);

  const mergedGames = userGames.map((userGame) => {
    const gameDetails = allGames.find((g) => g._id === userGame.game_id);
    return {
      ...gameDetails,
      ...userGame, // includes platform, user_value, timestamp, etc.
    };
  });

  const parsePrice = (val) => {
    if (typeof val === "string") {
      val = val.replace("€", "").replace(",", ".").trim();
      return parseFloat(val) || 0;
    }
    return val || 0;
  };

  const filteredGames = mergedGames
    .filter((game) => {
      // Platform filter
      const activePlatforms = Object.keys(filters.platforms).filter(
        (p) => filters.platforms[p]
      );
      if (
        activePlatforms.length > 0 &&
        !activePlatforms.includes(game.platform)
      ) {
        return false;
      }

      if (filters.price !== "all") {
        const price = parsePrice(game.user_value) || parsePrice(game.price);
        if (filters.price === "<10€" && price >= 10) return false;
        if (filters.price === "10-30€" && (price < 10 || price > 30))
          return false;
        if (filters.price === "30-50€" && (price < 30 || price > 50))
          return false;
        if (filters.price === ">50€" && price <= 50) return false;
      }
      return true;
    })

    .sort((a, b) => {
      const titleA = a.name || "";
      const titleB = b.name || "";
      if (filters.order === "A-Z") return titleA.localeCompare(titleB);
      if (filters.order === "Z-A") return titleB.localeCompare(titleA);
      if (filters.order === "€⬆")
        return (a.user_value || 0) - (b.user_value || 0);
      if (filters.order === "€⬇")
        return (b.user_value || 0) - (a.user_value || 0);
      return 0;
    });

  const handleFiltersChange = (newFilters) => setFilters(newFilters);

  return (
    <>
      <Header />
      <FloatingLogosBackground />
      <LibraryFilters filters={filters} onChange={handleFiltersChange} />
      <div className="library-container">
        <h1 className="library-title"> Your game library</h1>
        <div className="library-grid">
          {filteredGames.map((game) => {
            console.log("Game_id:", game._id, "Title:", game.name);
            return (
              <GameCard
                key={game._id}
                _id={game._id}
                title={game.name || "Untitled"}
                genre={game.genre}
                platform={game.platform}
                cover={game.cover}
              />
            );
          })}
        </div>
      </div>
      <AddGameButton />
    </>
  );
};

export default Library;
