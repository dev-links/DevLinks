import React from 'react';
import JobListings from './components/JobListings/JobListings';
import ClientDashboard from './components/clientDashboard/clientDashboard';
import Landing from './components/Landing/Landing';
import Login from './components/Login/Login';
import ClientRegister from './components/clientRegister/clientRegister';
import AdminRegister from './components/adminRegister/adminRegister';

import './App.css';
import routes from './routes';
import {HashRouter as Router} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">

      {/* <JobListings/> */}
      {/* <ClientDashboard /> */}
      {/* <Landing /> */}
      <Login />

      {/* <ClientRegister /> */}
<<<<<<< HEAD
=======

>>>>>>> master



      {routes}
    </div>
    </Router>
  );
}

export default App;
