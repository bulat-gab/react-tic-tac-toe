import React from "react";
import { Link } from "react-router-dom";
import WinnerBar from "./WinnerBar";
import "./GameEndBar.css";

export default function GameEndBar(props) {
  let gameResult;

  if (props.winner) {
    gameResult = <WinnerBar winner={props.winner} />;
  } else {
    gameResult = <div className="draw-bar">Draw!</div>;
  }

  return (
    <div className="game-end-bar">
      {gameResult}
      <button className="btn restart" onClick={props.onClick}>
        Restart
      </button>
      <Link to="/">
        <button className="btn go-to-menu">Go to menu</button>
      </Link>
    </div>
  );
}
