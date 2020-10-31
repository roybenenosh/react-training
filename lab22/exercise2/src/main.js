import React from 'react';
import ReactDOM from 'react-dom';
import { LoginWithUseState, LoginWithUseRef } from './login';
import '../css/main.css';

const App = () => {
  const user = {
    userName: null,
    passWord: null,
    verifiedPassword: null
  };

  return (
    <div className="login-wrapper">
      <LoginWithUseState user={user} />
      <LoginWithUseRef user={user} />
    </div>
  );
};

// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
