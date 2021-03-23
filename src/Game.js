import React, { Component } from 'react';
import Board from './Board';
import "./Game.css";
import GameEndBar from './GameEndBar';
import Player from './Player';

export default class Game extends Component {
    render() {
        return (
            <div className="game">
                <Player value="X"/>
                <Player value="O"/>
                <Board />
                <GameEndBar value="kek" />
            </div>
        )
    }
}

