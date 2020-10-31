import React from 'react';

export default function HintMessage({ value, guess, cheat }) {
  return (
    <div className="hint-message-wrapper">
      {!cheat && value >= 0 && (
        <div>
          {value < guess && (
            <span className="too-large">The number is too small</span>
          )}
          {value > guess && (
            <span className="too-small">The number is too large</span>
          )}
        </div>
      )}

      {cheat && value >= 0 && (
        <div>
          {value > guess && (
            <span className="too-large">The number is too small</span>
          )}
          {value < guess && (
            <span className="too-small">The number is too large</span>
          )}
        </div>
      )}

      {value >= 0 && value === guess && (
        <span className="correct-guess">
          THAT'S CORRECT ! The number is {guess}
        </span>
      )}
    </div>
  );
}
