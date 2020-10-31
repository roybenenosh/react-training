import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import HintMessage from './hintMessage';
import '../css/main.css';

const App = () => {
  const [value, setValue] = useState('');
  const [cheat, setCheat] = useState(false);
  const [guessNumber, setGuessNumber] = useState(false);
  const guess = 500;

  function onGuessChange(e) {
    setGuessNumber(guessNumber + 1);

    // set a wrong hint every 5 times
    setCheat(guessNumber % 5 === 0);
    setValue(parseInt(e.target.value));
  }

  return (
    <div>
      <div>
        <label>Choose a number between 1 - 1000</label>
      </div>
      <div>
        <input
          type="number"
          min="1"
          max="1000"
          value={value}
          onChange={onGuessChange}
        />
      </div>
      <HintMessage value={value} guess={guess} cheat={cheat} />
    </div>
  );
};

// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
