import React, { Component } from 'react';
import Square from './Square';
import Player from './Player';
import './Board.css'
import GameEnd from './GameEnd';

export default class Board extends Component {
  constructor(props) {
    super(props);

      this.state = {
          squares: Array(9).fill(null),
          xIsNext : true
      }

      // this.handleClick = this.handleClick.bind(this);
    }

    handleClick(i) {
      const squares = this.state.squares.slice();
      if (this.calculateWinner(squares)) {
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
    calculateWinner(squares) {
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
          return squares[a];
        }
      }
      return null;
    }

    render() {
      const winner = this.calculateWinner(this.state.squares);
      


      return (
        <div className="board">
          <div className="boardTitle">
            <Player value="X" color="blue" myTurn={this.state.xIsNext ? true : false}/>
            <Player value="O" color="pink" myTurn={this.state.xIsNext ? false : true} />
          </div>

          <div className="boardRow">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="boardRow">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="boardRow">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>

          {winner ? <GameEnd value={winner}/> : ""}
        </div>
        )
    }
}
