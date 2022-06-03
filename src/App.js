import React from 'react'
import './index.css'
import MemoryGame from './components/MemoryGame.js'
import Popup from './components/Popup';

function App() {


  
  return (
    <div className="App">
      <MemoryGame />
      
      <Popup id='intro-popup'>
        Instructions Here!
      </Popup>

    </div>
  );
}

export default App;
