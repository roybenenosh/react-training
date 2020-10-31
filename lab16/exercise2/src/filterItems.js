import React from 'react';

export default function FilterItems({ onInputChange }) {
  return (
    <div className="filter-items-wrapper">
      <input
        type="text"
        onChange={onInputChange}
        placeholder="Insert item name"
      />
    </div>
  );
}
