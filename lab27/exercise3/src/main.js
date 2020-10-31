import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import StarWarsCharacter from './starWarsCharacter';
import StarWarsFilm from './starWarsFilm';
import $ from 'jquery';

import '../css/main.css';

const App = () => {
  const [cahracterId, setCharactedId] = useState(1);
  const [character, setCharacter] = useState({ films: [] });

  useEffect(() => {
    const $xhr = $.getJSON(
      `https://swapi.dev/api/people/${cahracterId}/`,
      setMovies
    );
    return () => $xhr.abort();
  }, [cahracterId]);

  function setMovies(response) {
    setCharacter(response);
  }

  return (
    <div className="star-wars-display-wrapper">
      <StarWarsCharacter
        onCharacterSelect={setCharactedId}
        character={character}
      />
      {character.films.map(film => (
        <StarWarsFilm film={film} key={film} />
      ))}
    </div>
  );
};

// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
