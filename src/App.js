import logo from './logo.svg';
import React, { useState } from 'react';

import './App.css';
// import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'; // Import Redirect and Switch
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import LoginForm from './components/Login';
import Dashboard from './components/Dashboard';
import DataInput from './components/DataInput';
import DataQuery from './components/DataQuery';



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState('login'); // 'login', 'dashboard', 'dataInput', 'dataQuery'

  const handleLogin = (username, password) => {
    console.log('Logging in with username:', username, 'and password:', password);
    if (username === 'admin' && password === 'admin') {
      setIsLoggedIn(true);
      setCurrentPage('dashboard');
    } else {
      setIsLoggedIn(false);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentPage('login');
  };

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        currentPage === 'dashboard' ? (
          <Dashboard onPageChange={handleNavigation} onLogout={handleLogout} />
        ) : (
          currentPage === 'dataInput' ? (
            <DataInput onBackToDashboard={() => setCurrentPage('dashboard')} />
          ) : (
            currentPage === 'dataQuery' && <DataQuery onBackToDashboard={() => setCurrentPage('dashboard')} />
          )
        )
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;



