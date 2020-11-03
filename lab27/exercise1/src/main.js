import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import Vimeo from '@vimeo/player';
import '../css/main.css';

const App = () => {
  const playerRef = useRef(null);
  const playerDivRef = useRef(null);
  const options = { width: 500, loop: false };
  const [videoId, setVideoId] = useState(59777392);

  // video ids: 59777392  76979871

  useEffect(() => {
    playerRef.current = new Vimeo(playerDivRef.current, {
      ...options,
      id: videoId
    });
  }, []);

  useEffect(() => {
    const player = playerRef.current;
    player.loadVideo(videoId).then(() => {
      player.play();
    });
  }, [videoId]);

  return (
    <div className="vimeo-wrapper">
      <div className="player-search">
        <input
          placeholder="Insert video id"
          type="text"
          onChange={e => setVideoId(e.target.value)}
        />
      </div>
      <div ref={playerDivRef} allow="autoplay"></div>
    </div>
  );
};

// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
