import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import TinyColorDisplay from './tinyColorDisplay';
import '../css/main.css';

const App = () => {
  const colors = {
    White: '#FFFFFF',
    Yellow: '#FFFF00',
    Blue: '#0000FF',
    Red: '#FF0000',
    Green: '#008000'
  };

  const [color, setColor] = useState(colors['White']);

  function onColorChange(e) {
    setColor(e.target.value);
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
        <TinyColorDisplay color={color} />
      </div>
    </div>
  );
};

// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
