import React from "react";
import "../styles/games.css";
export default function Games({ game }) {
  return <img className="game-image" src={game.cover} alt="capa do jogo" />;
}
