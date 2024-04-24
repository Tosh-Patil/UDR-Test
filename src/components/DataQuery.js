import React from 'react';

const DataQuery = ({ onBackToDashboard }) => {
  return (
    <div>
      <h1>Data Query Page</h1>
      <button onClick={onBackToDashboard}>Back to Dashboard</button>
    </div>
  );
};

export default DataQuery;
