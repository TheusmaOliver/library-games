import React from "react";
import "../styles/gamesList.css";
import Games from "./Games";
export default function GamesList({
  games,
  genrers,
  setFilter,
  genrerName,
  filter,
}) {
  return (
    <main className="gamesList">
      <div className="gamesList__header">
        <h2 className="gamesList__title">
          {genrerName && filter ? genrerName : "All games"}({games.length})
        </h2>
        <div className="gamesList__filters">
          <span className="gamesList__filters--span">Showing:</span>
          <select
            className="gamesList__filters--select"
            name="genrer"
            onChange={(e) => setFilter(e.target.value)}
            id="genrer"
          >
            <option className="gamesList__filters--options" value="">
              All games
            </option>
            {genrers &&
              genrers.map((item) => (
                <option
                  className="gamesList__filters--options"
                  key={item.id}
                  value={item.id}
                >
                  {item.name}
                </option>
              ))}
          </select>
        </div>
      </div>
      <div className="gamesList__games">
        {games && games.map((game) => <Games key={game.id} game={game} />)}
      </div>
    </main>
  );
}
