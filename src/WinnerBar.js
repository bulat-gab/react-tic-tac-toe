import React from "react";
import TrophyLogo from "./trophy.svg";
import "./WinnerBar.css";

export default function WinnerBar(props) {
  const style = {
    color: props.winner === "X" ? "blue" : "pink",
  };

  return (
    <div className="winner-bar">
      <img src={TrophyLogo} alt="Trophy Logo" />
      <br />
      <span className="winner" style={style}>
        {props.winner}
      </span>
      Win!
    </div>
  );
}
