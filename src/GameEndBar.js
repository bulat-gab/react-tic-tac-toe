import React from "react";
import { Link } from "react-router-dom";
import "./GameEndBar.css";

export default function GameEndBar(props) {
  return (
    <div className="game-end-bar">
      <button className="btn restart" onClick={props.onClick}>
        Restart
      </button>
      <Link to="/">
        <button className="btn go-to-menu">Go to menu</button>
      </Link>
    </div>
  );
}
