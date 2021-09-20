import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/games.css";
export default function Games({ game }) {
  const [active, setActive] = useState(false);
  return (
    <NavLink
      to={`/info/${game.id}`}
      className="game"
      onMouseOver={() => setActive(true)}
      onMouseOut={() => setActive(false)}
    >
      <img className="game-image" src={game.cover} alt="capa do jogo" />
      <div className={`game-title ${active ? "active" : ""}`}>
        <span>{game.title}</span>
      </div>
    </NavLink>
  );
}
