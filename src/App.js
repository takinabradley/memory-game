import React from 'react'
import './index.css'
import MemoryGame from './components/MemoryGame.js'
import Popup from './components/Popup';

function App() {


  
  return (
    <div className="App">
      <MemoryGame />
      
      <Popup id='intro-popup'>
        <p>
          Click every card without clicking the same card twice!
        </p>
        Each level gets progressively harder, enjoy!
      </Popup>

    </div>
  );
}

export default App;
