import React, { useEffect, useState } from 'react';
import $ from 'jquery';

export default function StarWarsFilm({ film }) {
  const [movieDetails, setMovieDetails] = useState({});

  function setData(response) {
    const { title, opening_crawl } = response;
    setMovieDetails({ title, opening_crawl });
  }

  useEffect(() => {
    const $xhr = $.getJSON(`${film}`, setData);
    return () => $xhr.abort();
  }, [film]);

  return (
    <div className="film-wrapper">
      <div className="title">{movieDetails.title}</div>
      <div className="opening-crawl">{movieDetails.opening_crawl}</div>
    </div>
  );
}
