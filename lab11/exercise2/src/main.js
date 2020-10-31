import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import TimeUnitInput from './timeUnitInput';
import '../css/main.css';

const App = () => {
  const timeUnits = {
    seconds: { divider: 1, label: 'Seconds' },
    minutes: { divider: 60, label: 'Minutes' },
    hours: { divider: 3600, label: 'Hours' }
  };

  const [seconds, setSeconds] = useState(0);

  function onUnitChanged(value, multiplyToSeconds) {
    // normalize to seconds and then caldulate each unit by the seconds
    setSeconds(value * multiplyToSeconds);
  }

  return (
    <div>
      {Object.keys(timeUnits).map(function(timeUnit) {
        return (
          <TimeUnitInput
            key={timeUnit}
            label={timeUnits[timeUnit].label}
            value={seconds / timeUnits[timeUnit].divider}
            multiply={timeUnits[timeUnit].divider}
            onUnitChanged={(value, multiplyToSeconds) =>
              onUnitChanged(value, multiplyToSeconds)
            }
          />
        );
      })}
    </div>
  );
};

// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
