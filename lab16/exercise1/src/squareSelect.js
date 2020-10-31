import React from 'react';

export default function SquareSelect({ squares, onSquareSelected, newGame }) {
  return (
    <div className="square-select-wrapper">
      <div>
        {squares.map(function(isSelected, index) {
          const backgroundColor = isSelected ? 'red' : 'grey';
          return (
            <div
              key={index}
              className="square"
              style={{ backgroundColor: backgroundColor }}
              onClick={() => onSquareSelected(index)}
            ></div>
          );
        })}
      </div>
      <div>
        <button onClick={newGame}>New Game</button>
      </div>
    </div>
  );
}
