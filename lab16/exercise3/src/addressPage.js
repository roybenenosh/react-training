import React, { useState } from 'react';

export default function AddressPage({ updateUser, user }) {
  const countries = {
    Israel: ['Tel Aviv', 'Jerusalem', 'Haifa'],
    'United States': ['NYC', 'Washington', 'Los Angeles'],
    Spain: ['Barcelona', 'Madrid', 'Toledo']
  };

  const [selectedCountry, setSelectedCountry] = useState(user['Country']);

  function selectCountry(e) {
    const country = e.target.value;
    setSelectedCountry(country);
    updateUser({ Country: country }, { City: '' });
  }

  return (
    <div className="address-page-wrapper">
      <div className="row">
        <label>Country</label>
        <select onChange={e => selectCountry(e)} value={user['Country']}>
          <option>Select a country</option>
          {Object.keys(countries).map(function(country) {
            return <option key={country}>{country}</option>;
          })}
        </select>
      </div>
      <div className="row">
        <label>City</label>
        <select
          onChange={e => updateUser({ City: e.target.value })}
          value={user['City']}
        >
          <option>Select a city</option>
          {countries[selectedCountry] &&
            countries[selectedCountry].map(function(city) {
              return <option key={city}>{city}</option>;
            })}
        </select>
      </div>
    </div>
  );
}
