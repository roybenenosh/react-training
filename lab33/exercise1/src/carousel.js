import React, { useEffect, useState } from 'react';

function withCarousel(Component) {
  return function WithCarousel(props) {
    const [ticks, setTicks] = useState(0);

    useEffect(function() {
      setInterval(function() {
        setTicks(t => (t + 1) % 3);
      }, 1000);
    }, []);

    function navigate(action) {
      setTicks(t => (action === 'next' ? (t + 1) % 3 : (t - 1) % 3));
    }

    return <Component {...props} ticks={ticks} navigate={navigate} />;
  };
}

const Carousel = withCarousel(
  class Carousel extends React.Component {
    render() {
      const { ticks, children, navigate } = this.props;

      return (
        <div className="carousel-wrapper">
          <div>{children[ticks]}</div>
          <div>
            <button id="left" onClick={() => navigate('previous')}>
              Previous
            </button>
            <button id="right" onClick={() => navigate('next')}>
              Next
            </button>
          </div>
        </div>
      );
    }
  }
);

export default Carousel;
