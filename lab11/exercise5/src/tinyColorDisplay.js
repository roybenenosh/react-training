import React from 'react';
const tinyColor = require('tinycolor2');

export default function TinyColorDisplay({ color }) {
  const colorDeltas = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9];

  return (
    <div className="tiny-colors-wrapper">
      {colorDeltas.map(function(delta) {
        const c = tinyColor(color);
        const currentColor = c.setAlpha(delta);
        return (
          <div
            className="color-delta"
            style={{ backgroundColor: currentColor }}
          ></div>
        );
      })}
    </div>
  );
}
