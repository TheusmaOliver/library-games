import React from "react";
import "../styles/gamesList.css";
export default function GamesList({ games, error }) {
  return (
    <main className="gamesList">
      <div className="gamesList__header">
        <h2 className="gamesList__title">All Games({games.length})</h2>
        <div className="gamesList__filters">
          <span className="gamesList__filters--span">Showing:</span>
          <select
            className="gamesList__filters--select"
            name="genrer"
            id="genrer"
          >
            <option value="All Games">All Games</option>
          </select>
          <span className="gamesList__filters--span">Sort By:</span>
          <select className="gamesList__filters--select" name="sort" id="sort">
            <option value="favorites">Favorites</option>
          </select>
        </div>
      </div>
      <div className="gamesList__games">
        {games &&
          games.map((game) => (
            <img
              key={game.id}
              className="gamesList__games--img"
              src={game.cover}
              alt="capa do jogo"
            />
          ))}
      </div>
    </main>
  );
}
