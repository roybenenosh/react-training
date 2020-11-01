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

  // As discussed in class I think a nicer solution would be to pass
  // only the focused index as a prop to an inner component, and have that
  // inner component take focus when it needs to
  //
  // Or, as an alternative, to keep the ref only of the container element
  // and in the event handler use ref.current.querySelector('...') to react
  // the relevant child div and move focus to it
  // 
  // See here the solution we wrote in class today:
  // https://codesandbox.io/s/sweet-firefly-18531?file=/src/App.js
  //
  // P.S. tabIndex should reflect the order of importancy of the elements,
  // so I would use tabIndex={index + 1} instead
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
