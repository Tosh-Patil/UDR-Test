import React from 'react';

const Dashboard = ({ onPageChange, onLogout }) => {
  const handleLogout = () => {
    onLogout(); // Call the onLogout function provided by the parent component
  };

  return (
    <div>
      <h1>Dashboard!</h1>
      <button onClick={() => onPageChange('dataInput')}>Go to Data Input</button>
      <button onClick={() => onPageChange('dataQuery')}>Go to Data Query</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
