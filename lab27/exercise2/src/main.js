import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import StarWarsDisplay from './starWarsDisplay';

import '../css/main.css';

const App = () => {
  const [movieId, setMovieId] = useState(1);

  return (
    <div className="star-wars-display-wrapper">
      <div>
        <input
          value={movieId}
          type="number"
          onChange={e => setMovieId(e.target.value)}
          min={1}
          max={9}
        />
      </div>
      <StarWarsDisplay id={movieId} />
    </div>
  );
};

// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
