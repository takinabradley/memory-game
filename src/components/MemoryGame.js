import React, { useState } from "react";

import MemoryCard from "./MemoryCard";

import shuffleArray from '../modules/shuffleArray'
import images from '../modules/gameImages'

import Popup from "./Popup";

export default function MemoryGame() {
  const [state, setState] = useState({
    score: 0,
    level: 0,
    selected: [],
    gameOver: false,
    clicks: 0
  })

  const levels = [
    Object.values(images).slice(0, 4),
    Object.values(images).slice(0, 8),
    Object.values(images).slice(0, 12),
    Object.values(images).slice(0, 16)
  ]

  function restartGame() {
    console.log('hello?')
    setState({ score: 0, level: 0, selected: [], gameOver: false, clicks: 0 })
  }

  function resetLevel() {
    setState({ ...state, score: 0, selected: [], clicks: state.clicks + 1 })
  }

  function addPoint(image) {
    setState({
      ...state,
      score: state.score + 1,
      selected: [...state.selected, image],
      clicks: state.clicks + 1
    })
  }

  function gameOver() {
    setState({ ...state, gameOver: true, clicks: state.clicks = 1 })
  }

  function graduateLevel() {
    const maxLevel = levels.length - 1
    if (state.level === maxLevel) {
      gameOver()
      return;
    }
    
    const newLevel = ((state.level + 1) > maxLevel) ? maxLevel : state.level + 1
    setState({ score: 0, level: newLevel, selected: [], clicks: state.clicks + 1 })
  }

  function wasSelected(image) {
    return state.selected.includes(image)
  }

  function game(image) {
    const imageWasSelected = wasSelected(image)

    if ((!imageWasSelected) && (state.score + 1) === levels[state.level].length) {
      graduateLevel()
    } else if (!imageWasSelected) {
      addPoint(image)
    } else {
      resetLevel()
    }
  }
  
  const cards = shuffleArray(levels[state.level]).map((image) => {
    return <MemoryCard image={image} key={image.alt} onClick={() => game(image)}/>
  })

  const popup = (state.gameOver) ?
    <Popup id='gameOver' callback={restartGame}>You Won in {state.clicks} clicks!</Popup> : null;
  
  return (
    <div className="game">
      <div className="scoreboard">
        Score: {state.score} | level: {state.level} | clicks: {state.clicks}
      </div>

      <div className="card-container">
        {cards}
      </div>

      {popup}
    </div>
  );
}
