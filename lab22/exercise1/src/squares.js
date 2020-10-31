import React, { useEffect, useRef, useState } from 'react';

export default function Squares({ amount }) {
  const squaresRef = useRef([]);
  squaresRef.current = [];

  const [currentIndex, setCurrentIndex] = useState(0);

  function addToRef(el) {
    if (el && !squaresRef.current.includes(el)) {
      squaresRef.current.push(el);
    }
  }

  function onKeyPress(e) {
    const next = currentIndex === 3 ? 0 : currentIndex + 1;
    squaresRef.current[currentIndex].textContent = e.key;
    squaresRef.current[next].focus();
    setCurrentIndex(next);
  }

  useEffect(() => {
    if (squaresRef.current.length === amount) {
      squaresRef.current[0].focus();
    }
  }, [squaresRef.current.length]);

  return (
    <div className="squares">
      {[0, 1, 2, 3].map(function(num, index) {
        return (
          <div
            key={index}
            className="square"
            ref={addToRef}
            tabIndex={1}
            onKeyPress={onKeyPress}
          ></div>
        );
      })}
    </div>
  );
}
