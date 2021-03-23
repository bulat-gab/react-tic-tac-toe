import React, { Component } from 'react';
import Square from './Square';
import Player from './Player';
import './Board.css'
import GameEndBar from './GameEndBar';
import calculateWinner from './utils';

export default class Board extends Component {
  constructor(props) {
    super(props);

      this.state = {
          squares: Array(9).fill(null),
          xIsNext : true
      }
    }

    handleClick(i) {
      const squares = this.state.squares.slice();
      if (calculateWinner(squares) || squares[i]) {
        return;
      }

      squares[i] = this.state.xIsNext ? 'X' : 'O';
      this.setState({
        squares : squares, 
        xIsNext : !this.state.xIsNext
      });
    }

    renderSquare(i) {
      return (
        <Square 
          value={this.state.squares[i]}
          onClick={() => this.handleClick(i)}
        />
        
        );
    }
    

    render() {
      const winner = calculateWinner(this.state.squares);

      return (
        <div className="board">
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>

            {/* {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)} */}

          {/* <GameEndBar value={winner}/> */}
          {/* { winner ? <GameEndBar value={winner}/> : null} */}
        </div>
        )
    }
}
