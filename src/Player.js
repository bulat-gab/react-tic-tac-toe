import React, { Component } from "react";
import "./Player.css";

export default class Player extends Component {
  render() {
    const playerColor = {
      color: this.props.myTurn ? this.props.color : "gray",
    };

    return (
      <div className="player" style={playerColor}>
        Player {this.props.value}
      </div>
    );
  }
}
