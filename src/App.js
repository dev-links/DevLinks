import React from 'react';
import './App.css';
import routes from './routes';
import {HashRouter as Router} from 'react-router-dom';
import {logOutUser, getUserData} from './redux/actions/userAction';
import jwtDecode from 'jwt-decode';
import store from './redux/store'
import axios from 'axios'


const token = localStorage.FBIdToken;
if(token){
  const decodeToken = jwtDecode(token);
  if(decodeToken.exp * 1000 < Date.now()){
    store.dispatch(logOutUser())
    window.location.href = '/#/login'
  } else{
    store.dispatch({ type: "SET_AUTHENTICATED"})
    axios.defaults.headers.common['Authorization'] = token
    store.dispatch(getUserData())
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
      {/* <NavBar/> */}
      {/* <JobWizard/> */}
      {/* {routes} */}

      {/* <JobListings/> */}
      {/* <ClientDashboard /> */}
      {/* <Landing /> */}
      {/* <Login /> */}

      {/* <ClientRegister /> */}

      {/* <ClientRegister /> */}

      {/* <Chat/> */}

      {routes}

    </div>
    </Router>
  );
}

export default App;
