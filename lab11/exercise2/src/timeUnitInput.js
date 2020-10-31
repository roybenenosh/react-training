import React, { useState, useEffect } from 'react';

export default function TimeUnitdInput({
  value,
  multiply,
  label,
  onUnitChanged
}) {
  return (
    <div className="time-unit-input-wrapper">
      <label className="time-unit-label">{label}</label>
      <input
        type="number"
        value={value}
        step="0.01"
        onChange={e => onUnitChanged(e.target.value, multiply)}
      />
    </div>
  );
}
