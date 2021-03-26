import React, { Component } from "react";
import Board from "./Board";
import Player from "./Player";
import GameEndBar from "./GameEndBar";
import { calculateWinner, isBoardFull } from "./utils";
import "./Game.css";

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

  restartGame() {
    this.setState({
      squares: Array(9).fill(null),
      xIsNext: true,
    });
  }

  render() {
    const winner = calculateWinner(this.state.squares);
    const draw = !winner && isBoardFull(this.state.squares);

    let content;
    if (winner || draw) {
      content = (
        <GameEndBar winner={winner} onClick={() => this.restartGame()} />
      );
    } else {
      content = (
        <Board
          squares={this.state.squares}
          onClick={(i) => this.handleClick(i)}
        />
      );
    }

    return (
      <div className="game">
        <div className="player-header">
          <Player value="X" myTurn={this.state.xIsNext} color="blue" />
          <Player value="O" myTurn={!this.state.xIsNext} color="pink" />
        </div>
        {content}
      </div>
    );
  }
}
