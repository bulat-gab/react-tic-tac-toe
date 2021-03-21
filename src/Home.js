import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

function Home() {
    return (
        <div className="home"> 
            <h1>Let's Play the Tic-tac-toe Game!</h1>
            <Link to="game">Start a New Game</Link>
        </div>
    )
}

 export default Home
