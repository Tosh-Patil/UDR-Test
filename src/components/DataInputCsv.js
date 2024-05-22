import React, { useState } from 'react';
import './DataInputCsv.css'; 

const DataInputCsv = ({ onBackToDashboard }) => {
  const [csvFile, setCsvFile] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle CSV file submission here
  };

  return (
    <div className="data-input-csv-container">
      <h2 className="data-input-csv-title">Data Input (Upload CSV)</h2>
      <form className="data-input-csv-form" onSubmit={handleSubmit}>
        <label className="data-input-csv-label">
          Upload CSV File:
          <input
            className="data-input-csv-field"
            type="file"
            accept=".csv"
            onChange={(e) => setCsvFile(e.target.files[0])}
          />
        </label>
        <br />
        <div className="data-input-csv-buttons">
          <button className="data-input-csv-button" type="submit">Submit</button>
          <button className="data-input-csv-button" type="button" onClick={onBackToDashboard}>Back to Dashboard</button>
        </div>
      </form>
    </div>
  );
};

export default DataInputCsv;
