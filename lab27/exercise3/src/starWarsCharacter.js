import React from 'react';

export default function StarWarsCharacter({ character, onCharacterSelect }) {
  return (
    <div className="character-wrapper">
      <input
        type="number"
        placeholder="Select character ID"
        onChange={e => onCharacterSelect(e.target.value)}
      />
      {character && (
        <div>
          <div>Character: {character.name}</div>
        </div>
      )}
    </div>
  );
}
