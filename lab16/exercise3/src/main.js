import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import LoginPage from './loginPage';
import AddressPage from './addressPage';
import Summary from './summaryPage';
import '../css/main.css';

const App = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const [user, setUser] = useState({
    'User Name': '',
    Password: '',
    Country: '',
    City: ''
  });

  function updateUser(keyValues) {
    const tempUser = { ...user, ...keyValues };
    console.log(tempUser);
    setUser(tempUser);
  }

  return (
    <div className="page-wrapper">
      <div>
        {pageNumber === 0 && (
          <LoginPage updateUser={(k, v) => updateUser(k, v)} user={user} />
        )}
        {pageNumber === 1 && (
          <AddressPage updateUser={(k, v) => updateUser(k, v)} user={user} />
        )}
        {pageNumber === 2 && <Summary user={user} />}
      </div>
      <div>
        <button
          id="previous"
          onClick={() => setPageNumber(pageNumber - 1)}
          disabled={pageNumber === 0}
        >
          Previous
        </button>
        <button
          id="next"
          onClick={() => setPageNumber(pageNumber + 1)}
          disabled={pageNumber === 2}
        >
          Next
        </button>
      </div>
    </div>
  );
};

// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
