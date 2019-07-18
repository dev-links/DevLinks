import React from 'react';
import JobListings from './components/JobListings/JobListings';
import ClientDashboard from './components/clientDashboard/clientDashboard';
import Landing from './components/Landing/Landing';
import Login from './components/Login/Login';
import ClientRegister from './components/clientRegister/clientRegister';
import AdminRegister from './components/adminRegister/adminRegister';
import NavBar from './components/NavBar/NavBar';
import JobWizard from './components/JobWizard/Step1';

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
      {/* <Login /> */}
      {/* <ClientRegister /> */}
      {/* <NavBar/> */}
      <JobWizard/>
      {routes}

      {/* <JobListings/> */}
      {/* <ClientDashboard /> */}
      {/* <Landing /> */}
      {/* <Login /> */}

      {/* <ClientRegister /> */}




      {/* {routes} */}
    </div>
    </Router>
  );
}

export default App;
