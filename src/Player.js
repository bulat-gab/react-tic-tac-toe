import React, { Component } from 'react'

export default class Player extends Component {
    
    render() {
        const playerStyle = {
            color : this.props.myTurn ? this.props.color : "gray"
        };

        return (
            <div style={playerStyle}>
                Player {this.props.value}
            </div>
        )
    }
}
