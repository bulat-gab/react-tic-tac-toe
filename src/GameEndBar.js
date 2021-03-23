import React from 'react'
import { Link } from 'react-router-dom'
import './GameEndBar.css'
import Home from './Home'

export default function GameEndBar(props) {
  function refreshPage() {
    window.location.reload(false);
  }

  function goToHome() {
    window.location.href = ""
  }

    return (
      <div className="game-end-bar">
        <div className="winner">
          Winner: {props.value}
        </div>
        <button 
          className="restart"
          onClick={refreshPage}
        >
            Restart
        </button>
        <Link to="/">
          <button>Go to menu</button>
        </Link>
      </div>
    )
}
