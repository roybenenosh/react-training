import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import SortableTable from './sortableTable';
import '../css/main.css';

const App = () => {
  const [items, setItems] = useState([
    ['id', 'Name', 'Country', 'Email'],
    [0, 'dan', 'Israel', 'dan@gmail.com'],
    [1, 'dana', 'Israel', 'dana@gmail.com'],
    [2, 'anna', 'Israel', 'anna@gmail.com'],
    [3, 'zina', 'UK', 'zina@gmail.com']
  ]);

  const [orderType, setOrderType] = useState('DESC');

  function orderByColumn(columnName) {
    // currently supports only Name column
    if (!columnName === 'Name') return;

    let tempItems = [...items];
    tempItems.shift();
    const headers = [...items[0]];
    const sorted = tempItems.sort(function(a, b) {
      if (orderType === 'ASC') {
        return a[1] < b[1] ? -1 : 1;
      } else {
        return a[1] > b[1] ? -1 : 1;
      }
    });
    setOrderType(orderType === 'ASC' ? 'DESC' : 'ASC');
    setItems([[...headers], ...sorted]);
  }

  return <SortableTable items={items} orderByColumn={orderByColumn} />;
};

// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
