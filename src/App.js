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
import {logOutUser, getUserData} from './redux/actions/userAction';
import firebaseStore from './redux/firebaseStore';
import axios from 'axios'
import jwtDecode from 'jwt-decode';

const token = localStorage.FBIdToken;
if(token){
  const decodeToken = jwtDecode(token);
  if(decodeToken.exp * 1000 < Date.now()){
    firebaseStore.dispatch(logOutUser())
    window.location.href = '/#/login'
  } else{
    firebaseStore.dispatch({ type: "SET_AUTHENTICATED"})
    axios.defaults.headers.common['Authorization'] = token
    firebaseStore.dispatch(getUserData())
  }
}

function App() {
  return (
    <Router>
    <div className="App">

      {/* <JobListings/> */}
      {/* <ClientDashboard /> */}
      {/* <Landing /> */}
      {/* <Login /> */}

      {/* <ClientRegister /> */}




      {routes}
    </div>
    </Router>
  );
}

export default App;
