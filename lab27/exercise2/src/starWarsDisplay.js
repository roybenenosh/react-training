import React, { useEffect, useState } from 'react';
import $ from 'jquery';

export default function({ id }) {
  const [movieDetails, setMovieDetails] = useState({});

  function setData(response) {
    const { title, opening_crawl } = response;
    setMovieDetails({ title, opening_crawl });
  }

  useEffect(() => {
    const $xhr = $.getJSON(`https://swapi.dev/api/films/${id}/`, setData);
    return () => $xhr.abort();
  }, [id]);

  return (
    <div>
      <div className="title">{movieDetails.title}</div>
      <div className="opening-crawl">{movieDetails.opening_crawl}</div>
    </div>
  );
}
