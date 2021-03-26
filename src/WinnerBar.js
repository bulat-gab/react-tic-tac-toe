import React from "react";
import "./WinnerBar.css";

export default function WinnerBar(props) {
  const style = {
    color: props.winner === "X" ? "blue" : "pink",
  };

  return (
    <div className="winner-bar">
      <span className="winner" style={style}>
        {props.winner}
      </span>
      Win!
    </div>
  );
}
