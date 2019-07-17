import React from 'react';
import JobListings from './components/JobListings/JobListings';
import ClientDashboard from './components/clientDashboard/clientDashboard';
import Landing from './components/Landing/Landing';
import Login from './components/Login/Login';
import ClientRegister from './components/clientRegister/clientRegister';

import './App.css';
import routes from './routes';
import ChatRoom from './components/ChatRoom';

function App() {
  return (
    <div className="App">
      {/* <JobListings/> */}
      {/* <ClientDashboard /> */}
      {/* <Landing /> */}
      {/* <Login /> */}

      {/* <ClientRegister /> */}
      <ChatRoom />
      {routes}

    </div>
  );
}

export default App;
