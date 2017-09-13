import React from 'react';

export const Paginator = ({ children, data, start, end }) => {
  const filteredData = data.slice(start, end);
  return <div>
    <h1>Yay pagination</h1>
    <div>{children(filteredData)}</div>
  </div>;
};
