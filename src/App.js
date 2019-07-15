import React from 'react';
import JobListings from './components/JobListings';
import ClientDashboard from './components/clientDashboard/clientDashboard';

import './App.css';

function App() {
  return (
    <div className="App">
      <JobListings/>
      <ClientDashboard />
    </div>
  );
}

export default App;
