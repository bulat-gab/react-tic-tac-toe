import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <h1>Let's Play the Tic-tac-toe Game!</h1>
      <Link to="game">
        <button className="btn start-game">Start a New Game</button>
      </Link>
    </div>
  );
}

export default Home;
