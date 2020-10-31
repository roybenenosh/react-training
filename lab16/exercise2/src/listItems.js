import React from 'react';

export default function ListItems({ filteredItems }) {
  return (
    <div className="filtered-items-wrapper">
      {filteredItems.map(item => (
        <div className="item">{item}</div>
      ))}
    </div>
  );
}
