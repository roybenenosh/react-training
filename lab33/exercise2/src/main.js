import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery/dist/jquery';
import '../css/main.css';

function useRemoteData(address, id) {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  function onSuccess(res) {
    console.log(res);
    setData(res);
    setIsLoading(false);
  }

  function onError(err) {
    console.log(err);
    setError(err.statusText);
  }

  useEffect(function() {
    const $xhr = $.getJSON(address, onSuccess).fail(onError);
    return () => $xhr.abort();
  }, [id]);

  return [data, isLoading, error];
}

function StarwarsCharacter(props) {
  const { id } = props;
  const [
    data,
    isLoading,
    error
  ] = useRemoteData(`https://swapi.co/api/people/${id}/`, [id]);

  if (error) {
    return <p className="error">{error}</p>;
  }

  if (isLoading) {
    return <p>Please wait, loading data...</p>;
  }

  return (
    <div>
      <p>Character name: {data.name}</p>
    </div>
  );
}

const App = () => {
  const [id, setId] = useState(1);
  return (
    <div>
      <input type="number" min="1" onChange={e => setId(e.target.value)} />
      <StarwarsCharacter id={id} />
    </div>
  );
};

const root = document.querySelector('main');
ReactDOM.render(<App />, root);
