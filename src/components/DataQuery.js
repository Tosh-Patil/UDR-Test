// import React from 'react';
import React, { useState } from 'react';


const QueryForm = ({ onBackToDashboard }) => {
  const [productNumber, setProductNumber] = useState('');
  const [productName, setProductName] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here, e.g., send data to backend
  };

  return (
    <div>
      <h2>Query Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Product Number:
          <input type="text" value={productNumber} onChange={(e) => setProductNumber(e.target.value)} />
        </label>
        <br />
        <label>
          Product Name:
          <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} />
        </label>
        <br />
        <label>
          Category:
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">Select Category</option>
            <option value="Seating">Seating</option>
            <option value="Desk">Desk</option>
            <option value="Collaborative Workspace">Collaborative Workspace</option>
            <option value="Tables">Tables</option>
            <option value="Office Storage">Office Storage</option>
            <option value="Sofa/ Lounges">Sofa/ Lounges</option>
            <option value="Whiteboards/ Presentation Product">Whiteboards/ Presentation Product</option>
            <option value="Hospitality Furniture">Hospitality Furniture</option>
            <option value="Acoustic Solutions">Acoustic Solutions</option>
            <option value="Education">Education</option>
            <option value="Other">Other</option>
          </select>
        </label>
        <br />
        <button type="submit">Search</button>
        <button onClick={onBackToDashboard}>Back to Dashboard</button>
      </form>
    </div>
  );
};

export default QueryForm;