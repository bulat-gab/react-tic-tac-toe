import React, { Component } from "react";
import Board from "./Board";
import "./Game.css";
import GameEndBar from "./GameEndBar";
import Player from "./Player";
import calculateWinner from "./utils";

export default class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }

  render() {
    const winner = calculateWinner(this.state.squares);

    return (
      <div className="game">
        <Player value="X" myTurn={this.state.xIsNext} color="blue" />
        <Player value="O" myTurn={!this.state.xIsNext} color="pink" />

        {!winner ? (
          <Board
            squares={this.state.squares}
            onClick={(i) => this.handleClick(i)}
          />
        ) : null}
        {winner ? (
          <GameEndBar value={winner} color={winner === "X" ? "blue" : "pink"} />
        ) : null}
      </div>
    );
  }
}
