import React from 'react';

export default function ColorDisplay({ backgroundColor }) {
  return (
    <div
      style={{
        border: '2px solid black',
        backgroundColor: backgroundColor,
        width: '200px',
        height: '200px'
      }}
    ></div>
  );
}
