import React from 'react';

export default function SummaryPage({ user }) {
  return (
    <div className="summary-page-wrapper">
      {Object.keys(user).map(function(propName) {
        return (
          <div className="row" key={propName}>
            <label>{propName}</label>
            <span>{user[propName]}</span>
          </div>
        );
      })}
    </div>
  );
}
