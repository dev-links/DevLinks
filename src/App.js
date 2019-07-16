import React from 'react';
import JobListings from './components/JobListings';
import ClientDashboard from './components/clientDashboard/clientDashboard';
import Landing from './components/Landing/Landing';
import Login from './components/Login/Login';

import './App.css';
import routes from './routes';

function App() {
  return (
    <div className="App">
      <JobListings/>
      {/* <ClientDashboard /> */}
      {/* <Landing /> */}
      {/* <Login /> */}
      {routes}
    </div>
  );
}

export default App;
