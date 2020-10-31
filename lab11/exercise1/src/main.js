import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import BindedInput from './bindedInput';
import '../css/main.css';

const App = () => {
  const [value, setValue] = useState('');

  function onTextChange(e) {
    setValue(e.target.value);
  }

  return (
    <div>
      <BindedInput value={value} onTextChange={onTextChange} />
      <BindedInput value={value} onTextChange={onTextChange} />
      <BindedInput value={value} onTextChange={onTextChange} />
      <BindedInput value={value} onTextChange={onTextChange} />
      <BindedInput value={value} onTextChange={onTextChange} />
    </div>
  );
};

// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
