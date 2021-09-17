import React from "react";
import jogo1 from "../assets/images/bloodborne.jpeg";
import "../styles/gamesList.css";
export default function GamesList() {
  return (
    <main className="gamesList">
      <div className="gamesList__header">
        <h2 className="gamesList__title">All Games(65)</h2>
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
        <img className="gamesList__games--img" src={jogo1} alt="jogo" />
        <img className="gamesList__games--img" src={jogo1} alt="jogo" />
        <img className="gamesList__games--img" src={jogo1} alt="jogo" />
        <img className="gamesList__games--img" src={jogo1} alt="jogo" />
        <img className="gamesList__games--img" src={jogo1} alt="jogo" />
        <img className="gamesList__games--img" src={jogo1} alt="jogo" />
        <img className="gamesList__games--img" src={jogo1} alt="jogo" />
        <img className="gamesList__games--img" src={jogo1} alt="jogo" />
        <img className="gamesList__games--img" src={jogo1} alt="jogo" />
        <img className="gamesList__games--img" src={jogo1} alt="jogo" />
        <img className="gamesList__games--img" src={jogo1} alt="jogo" />
        <img className="gamesList__games--img" src={jogo1} alt="jogo" />
      </div>
    </main>
  );
}
