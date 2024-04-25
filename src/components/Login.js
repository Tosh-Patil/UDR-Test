import React, { useState } from 'react';

function LoginForm({ onLogin }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const username = event.target.elements.username.value;
    const password = event.target.elements.password.value;
    onLogin(username, password); // Ensure onLogin is properly called
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login Page</h2>
      <input type="text" name="username" placeholder="Username" />
      <input type="password" name="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;