// import React from 'react';
import React, { useState } from 'react';
import './DataInput.css'; // Import the CSS file

const DataInput = ({ onBackToDashboard }) => {
  const [productName, setProductName] = useState('');
  const [category, setCategory] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [description, setDescription] = useState('');
  const [features, setFeatures] = useState('');
  const [option, setOption] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here, e.g., send data to backend
  };

  return (
    <div className="data-input-container">
      <h2 className="data-input-title">Data Input</h2>
      <form className="data-input-form" onSubmit={handleSubmit}>
        <label className="data-input-label">
          Product Name:
          <input className="data-input-field" type="text" value={productName} onChange={(e) => setProductName(e.target.value)} />
        </label>
        <br />
        <label className="data-input-label">
          Product Category:
          <select className="data-input-select" value={category} onChange={(e) => setCategory(e.target.value)}>
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
        <label className="data-input-label">
          Additional Information:
          <input className="data-input-field" type="text" value={additionalInfo} onChange={(e) => setAdditionalInfo(e.target.value)} />
        </label>
        <br />
        <label className="data-input-label">
          Product Description:
          <textarea className="data-input-textarea" value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        <br />
        <label className="data-input-label">
          Features:
          <textarea className="data-input-textarea" value={features} onChange={(e) => setFeatures(e.target.value)} />
        </label>
        <br />
        <label className="data-input-label">
          Option:
          <textarea className="data-input-textarea" value={option} onChange={(e) => setOption(e.target.value)} />
        </label>
        <br />
        <button className="data-input-button" type="submit">Submit</button>
        <button className="data-input-button" onClick={onBackToDashboard}>Back to Dashboard</button>
      </form>
    </div>
  );
};

export default DataInput;