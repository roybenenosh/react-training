import React from 'react';

export default function SortableTable({ items, orderByColumn }) {
  return (
    <div className="sortable-table-wrapper">
      <table className="bordered">
        <thead>
          <tr>
            {items[0].map(function(th, index) {
              return (
                <th onClick={() => orderByColumn(th)} key={th + index}>
                  {th}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {items.map(function(tr, index) {
            if (index > 0) {
              return (
                <tr key={index * 2}>
                  {tr.map(function(td) {
                    return <td key={td + index}>{td}</td>;
                  })}
                </tr>
              );
            }
          })}
        </tbody>
      </table>
    </div>
  );
}
