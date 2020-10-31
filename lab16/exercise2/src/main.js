import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import FilterItems from './filterItems';
import ListItems from './listItems';
import '../css/main.css';

const App = () => {
  const initialItems = ['banana', 'tomato', 'potato'];
  const [filteredItems, setFilteredItems] = useState(initialItems);

  function onInputChange(e) {
    setFilteredItems(initialItems.filter(item => item === e.target.value));
  }

  return (
    <div>
      <FilterItems onInputChange={onInputChange} />
      <ListItems filteredItems={filteredItems} />
    </div>
  );
};

// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
