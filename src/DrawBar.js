import React from "react";
import GameEndBar from "./GameEndBar";
import "./GameEndBar.css";

export default function DrawBar() {
  return (
    <div>
      <div className="draw-bar">Draw!</div>
      <GameEndBar />
    </div>
  );
}
