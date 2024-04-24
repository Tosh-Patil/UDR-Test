import React from 'react';

const DataInput = ({ onBackToDashboard }) => {
  return (
    <div>
      <h1>Data Input Page</h1>
      <button onClick={onBackToDashboard}>Back to Dashboard</button>
    </div>
  );
};

export default DataInput;
