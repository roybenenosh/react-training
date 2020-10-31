import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ColorDisplay from './colorDisplay';
import '../css/main.css';

const App = () => {
  const colors = {
    White: '#FFFFFF',
    Yellow: '#FFFF00',
    Blue: '#0000FF',
    Red: '#FF0000',
    Green: '#008000'
  };

  const [selectedColor, setSelectedColor] = useState('White');

  function onColorChange(e) {
    setSelectedColor(e.target.value);
  }

  return (
    <div>
      <div className="select-color">
        <select onChange={onColorChange}>
          {Object.keys(colors).map(function(key) {
            return (
              <option key={key} value={colors[key]}>
                {key}
              </option>
            );
          })}
        </select>
      </div>

      <div className="color-display">
        <ColorDisplay backgroundColor={selectedColor} />
      </div>
    </div>
  );
};

// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
