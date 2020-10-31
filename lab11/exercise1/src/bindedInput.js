import React from 'react';

export default function BindedInput({ value, onTextChange }) {
  return (
    <div className="binded-input-wrapper">
      <input type="text" value={value} onChange={onTextChange} />
    </div>
  );
}
