import logo from './logo.svg';
import React, { useState } from 'react';

import './App.css';
// import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'; // Import Redirect and Switch
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import LoginForm from './components/Login';
import Dashboard from './components/Dashboard';
import DataInput from './components/DataInput';
import DataQuery from './components/DataQuery';



// function App() {
//   return (
    
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
    
//   );
// }

// export default App;

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

//   const handleLogin = (username, password) => {
//     // Add your login logic here
//     console.log('Logging in with username:', username, 'and password:', password);
//     if (username === 'admin' && password === 'admin') {
//       setIsLoggedIn(true);
//     } else {
//       setIsLoggedIn(false);
//     }
//   };



//   return (
//     <div className="App">
//       {isLoggedIn ? (
//         <Dashboard />
//       ) : (
//         <LoginForm onLogin={handleLogin} />
//       )}
//     </div>
//   );
// }

// export default App;

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [currentPage, setCurrentPage] = useState('login'); // 'login', 'dashboard', 'dataInput', 'dataQuery'

//   const handleLogin = (username, password) => {
//     console.log('Logging in with username:', username, 'and password:', password);
//     if (username === 'admin' && password === 'admin') {
//       setIsLoggedIn(true);
//       setCurrentPage('dashboard');
//     } else {
//       setIsLoggedIn(false);
//     }
//   };

//   const handleNavigation = (page) => {
//     setCurrentPage(page);
//   };

//   const handleBackToDashboard = () => {
//     setCurrentPage('dashboard');
//   };

//   return (
//     <div className="App">
//       {isLoggedIn ? (
//         currentPage === 'dashboard' ? (
//           <Dashboard onPageChange={handleNavigation} />
//         ) : (
//           currentPage === 'dataInput' && <DataInput onBackToDashboard={handleBackToDashboard} />
//         )
//       ) : (
//         <LoginForm onLogin={handleLogin} />
//       )}

//       {/* Remove rendering of DataQuery component in this example */}
//     </div>
//   );
// }

// export default App;





// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [currentPage, setCurrentPage] = useState('login'); // 'login', 'dashboard', 'dataInput', 'dataQuery'

//   const handleLogin = (username, password) => {
//     console.log('Logging in with username:', username, 'and password:', password);
//     if (username === 'admin' && password === 'admin') {
//       setIsLoggedIn(true);
//       setCurrentPage('dashboard');
//     } else {
//       setIsLoggedIn(false);
//     }
//   };

//   const handleNavigation = (page) => {
//     setCurrentPage(page);
//   };

//   const handleBackToDashboard = () => {
//     setCurrentPage('dashboard');
//   };

//   return (
//     <div className="App">
//       {isLoggedIn ? (
//         currentPage === 'dashboard' ? (
//           <Dashboard onPageChange={handleNavigation} />
//         ) : (
//           currentPage === 'dataInput' ? (
//             <DataInput onBackToDashboard={handleBackToDashboard} />
//           ) : (
//             currentPage === 'dataQuery' && <DataQuery onBackToDashboard={handleBackToDashboard} />
//           )
//         )
//       ) : (
//         <LoginForm onLogin={handleLogin} />
//       )}
//     </div>
//   );
// }

// export default App;



// semi working
// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [currentPage, setCurrentPage] = useState('login'); // 'login', 'dashboard', 'dataInput', 'dataQuery'

//   const handleLogin = (username, password) => {
//     console.log('Logging in with username:', username, 'and password:', password);
//     if (username === 'admin' && password === 'admin') {
//       setIsLoggedIn(true);
//       setCurrentPage('dashboard');
//     } else {
//       setIsLoggedIn(false);
//     }
//   };

//   const handleNavigation = (page) => {
//     setCurrentPage(page);
//   };

//   const handleBackToDashboard = () => {
//     setCurrentPage('dashboard');
//   };

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     setCurrentPage('login'); // Redirect to login page after logout
//   };

//   return (
//     <div className="App">
//       {isLoggedIn ? (
//         currentPage === 'dashboard' ? (
//           <Dashboard onPageChange={handleNavigation} onLogout={handleLogout} />
//         ) : (
//           currentPage === 'dataInput' ? (
//             <DataInput onBackToDashboard={handleBackToDashboard} />
//           ) : (
//             currentPage === 'dataQuery' && <DataQuery onBackToDashboard={handleBackToDashboard} />
//           )
//         )
//       ) : (
//         <LoginForm onLogin={handleLogin} />
//       )}
//     </div>
//   );
// }

// export default App;









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





//not working
// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [currentPage, setCurrentPage] = useState('login'); // 'login', 'dashboard', 'dataInput', 'dataQuery'

//   const handleLogin = (username, password) => {
//     console.log('Logging in with username:', username, 'and password:', password);
//     if (username === 'admin' && password === 'admin') {
//       setIsLoggedIn(true);
//       setCurrentPage('dashboard');
//     } else {
//       setIsLoggedIn(false);
//     }
//   };

//   const handleNavigation = (page) => {
//     setCurrentPage(page);
//   };

//   return (
//     <Router>
//       <div className="App">
//         {isLoggedIn ? (
//           <Redirect to="/dashboard" />
//         ) : (
//           <Route path="/" exact>
//             <LoginForm onLogin={handleLogin} />
//           </Route>
//         )}

//         <Route path="/dashboard" exact>
//           <Dashboard onPageChange={handleNavigation} />
//         </Route>

//         <Route path="/datainput" exact>
//           <DataInput />
//         </Route>

//         <Route path="/dataquery" exact>
//           <DataQuery />
//         </Route>
//       </div>
//     </Router>
//   );
// }

// export default App;


// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [currentPage, setCurrentPage] = useState('login'); // 'login', 'dashboard', 'dataInput', 'dataQuery'

//   const handleLogin = (username, password) => {
//     console.log('Logging in with username:', username, 'and password:', password);
//     if (username === 'admin' && password === 'admin') {
//       setIsLoggedIn(true);
//       setCurrentPage('dashboard');
//     } else {
//       setIsLoggedIn(false);
//     }
//   };

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     setCurrentPage('login');
//   };

//   return (
//     <div className="App">
//       {isLoggedIn ? (
//         renderDashboard()
//       ) : (
//         <LoginForm onLogin={handleLogin} />
//       )}
//     </div>
//   );

//   function renderDashboard() {
//     switch (currentPage) {
//       case 'dashboard':
//         return <Dashboard onLogout={handleLogout} />;
//       case 'dataInput':
//         return <DataInput />;
//       case 'dataQuery':
//         return <DataQuery />;
//       default:
//         return null;
//     }
//   }
// }

// export default App;