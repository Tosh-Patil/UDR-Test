import React, { useState } from 'react';
import './Login.css'; 

function LoginForm({ onLogin }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const username = event.target.elements.username.value;
    const password = event.target.elements.password.value;
    onLogin(username, password); // Ensure onLogin is properly called
  };

  return (
    <form className="login-form-container" onSubmit={handleSubmit}>
      <h2 className="login-form-title">Login Page</h2>
      <input className="login-form-input" type="text" name="username" placeholder="Username" />
      <input className="login-form-input" type="password" name="password" placeholder="Password" />
      <button className="login-form-button" type="submit">Login</button>
    </form>
  );
}

export default LoginForm;