import React from 'react';
import ReactDOM from 'react-dom';
import Squares from './squares';
import '../css/main.css';

const App = () => {
  return (
    <div className="squares-wrapper">
      <Squares amount={4} />
    </div>
  );
};

// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
