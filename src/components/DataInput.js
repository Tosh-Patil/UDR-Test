// import React from 'react';
import React, { useState } from 'react';



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
    <div>
      <h2>Data Input</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Product Name:
          <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} />
        </label>
        <br />
        <label>
          Product Category:
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
        <label>
          Additional Information:
          <input type="text" value={additionalInfo} onChange={(e) => setAdditionalInfo(e.target.value)} />
        </label>
        <br />
        <label>
          Product Description:
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        <br />
        <label>
          Features:
          <textarea value={features} onChange={(e) => setFeatures(e.target.value)} />
        </label>
        <br />
        <label>
          Option:
          <textarea value={option} onChange={(e) => setOption(e.target.value)} />
        </label>
        <br />
        <button type="submit">Submit</button>
        <button onClick={onBackToDashboard}>Back to Dashboard</button>
      </form>
    </div>
  );
};

export default DataInput;