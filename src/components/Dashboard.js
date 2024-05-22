import React from 'react';
import './Dashboard.css'

const Dashboard = ({ onPageChange, onLogout }) => {
  const handleLogout = () => {
    onLogout(); // Call the onLogout function provided by the parent component
  };

  return (
    <div className="dashboard-container">
      <h1 className ="dashboard-title">Dashboard!</h1>
      <button className="dashboard-button" onClick={() => onPageChange('dataInput')}>Go to Data Input</button>
      <button className="dashboard-button" onClick={() => onPageChange('dataInputCsv')}>Go to Data Input (upload csv)</button>
      <button className="dashboard-button" onClick={() => onPageChange('dataQuery')}>Go to Data Query</button>
      <button className="dashboard-button" onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
