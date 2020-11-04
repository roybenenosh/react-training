import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './carousel.js';
import la from './la.jpg';
import chicago from './chicago.jpg';
import ny from './ny.jpg';
import '../css/main.css';

const App = () => {
  return (
    <Carousel>
      <img src={la} alt="Los Angeles" />
      <img src={chicago} alt="Chicago" />
      <img src={ny} alt="New York" />
    </Carousel>
  );
};

const root = document.querySelector('main');
ReactDOM.render(<App />, root);
