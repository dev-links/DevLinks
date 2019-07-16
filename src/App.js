import React from 'react';
import JobListings from './components/JobListings';
import ClientDashboard from './components/clientDashboard/clientDashboard';
import Landing from './components/Landing/Landing';
import Login from './components/Login/Login';

import './App.css';

function App() {
  return (
    <div className="App">
      <JobListings/>
      {/* <ClientDashboard /> */}
      {/* <Landing /> */}
      {/* <Login /> */}
    </div>
  );
}

export default App;
