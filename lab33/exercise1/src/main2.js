import React from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import la from './la.jpg';
import chicago from './chicago.jpg';
import ny from './ny.jpg';
import '../css/main.css';

const App = () => {
  return (
    <Carousel>
      <div>
        <img src={la} alt="Los Angeles" />
      </div>
      <div>
        <img src={chicago} alt="Chicago" />
      </div>
      <div>
        <img src={ny} alt="New York" />
      </div>
    </Carousel>
  );
};

const root = document.querySelector('main');
ReactDOM.render(<App />, root);
