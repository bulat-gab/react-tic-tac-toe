import React, { Component } from "react";
import Board from "./Board";
import DrawBar from "./DrawBar";
import "./Game.css";
import WinnerBar from "./WinnerBar";
import Player from "./Player";
import { calculateWinner, isFullBoard } from "./utils";

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
    const draw = !winner && isFullBoard(this.state.squares);

    let content;
    if (winner) {
      content = (
        <WinnerBar
          value={winner}
          color={winner === "X" ? "blue" : "pink"}
          onClick={() => this.restartGame()}
        />
      );
    } else if (draw) {
      content = <DrawBar onClick={() => this.restartGame()} />;
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
