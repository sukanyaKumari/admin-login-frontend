import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'; 

import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = async () => {
    try {
      const response = await axios.post('YOUR_BACKEND_API_ENDPOINT/login', {
        username,
        password,
      });
      if (response.data.success) {
        setLoggedIn(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (loggedIn) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div>
      <h2>Admin Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

const Dashboard = () => {
  return (
    <div>
      <h2>Welcome to the Admin Dashboard</h2>
      {/* Add your admin dashboard content here */}
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
