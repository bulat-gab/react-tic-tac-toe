import React from "react";
import { Link } from "react-router-dom";
import "./GameEndBar.css";

export default function GameEndBar(props) {
  function refreshPage() {
    window.location.reload(false);
  }

  const playerColor = {
    color: props.color,
  };

  return (
    <div className="game-end-bar">
      <div>
        <span className="winner" style={playerColor}>
          {props.value}
        </span>
        Win!
      </div>
      <button className="restart" onClick={refreshPage}>
        Restart
      </button>
      <Link to="/">
        <button>Go to menu</button>
      </Link>
    </div>
  );
}
