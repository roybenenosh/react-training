import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import DisplayScore from './displayScore';
import SquareSelect from './squareSelect';
import '../css/main.css';

const App = () => {
  const [score, setScore] = useState(0);
  const [squares, setSquares] = useState(createSquareData(1, 10));

  function createSquareData(start, end) {
    let squares = Array(end - start + 1)
      .fill()
      .map((_, index) => {
        return false;
      });
    squares[0] = true;
    return squares;
  }

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  function onSquareSelected(index) {
    let tempSquares = [...squares];
    if (tempSquares[index]) {
      setScore(score + 10);
      tempSquares[index] = false;
      const nextSelectedSquare = getRandomInt(10);
      tempSquares[nextSelectedSquare] = true;
      setSquares(tempSquares);
    } else {
      setScore(score - 5);
    }
  }

  function newGame() {
    setScore(0);
    let tempSquares = [...squares];
    tempSquares = tempSquares.map(function(square) {
      return false;
    });
    const nextSelectedSquare = getRandomInt(10);
    tempSquares[nextSelectedSquare] = true;
    setSquares(tempSquares);
  }

  return (
    <div>
      <DisplayScore score={score} />
      <SquareSelect
        squares={squares}
        onSquareSelected={onSquareSelected}
        newGame={newGame}
      />
    </div>
  );
};

// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
