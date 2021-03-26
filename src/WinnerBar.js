import React from "react";
import GameEndBar from "./GameEndBar";
import "./GameEndBar.css";

export default function WinnerBar(props) {
  const playerColor = {
    color: props.color,
  };

  return (
    <div>
      <div className="winner-bar">
        <span className="winner" style={playerColor}>
          {props.value}
        </span>
        Win!
      </div>
      <GameEndBar onClick={props.onClick} />
    </div>
  );
}
