import React from 'react';
import './App.css';
import routes from './routes';
import {HashRouter as Router} from 'react-router-dom';
import {logOutUser, getUserData} from './redux/actions/userAction';
import firebaseStore from './redux/firebaseStore';
import jwtDecode from 'jwt-decode';

let authenticated
const token = localStorage.FBIdToken;
if(token){
  const decodeToken = jwtDecode(token);
  if(decodeToken.exp * 1000 < Date.now()){
//     firebaseStore.dispatch(logOutUser())
    window.location.href = '/#/login'
    authenticated = false
  } else{
//     firebaseStore.dispatch({ type: "SET_AUTHENTICATED"})
//     axios.defaults.headers.common['Authorization'] = token
//     firebaseStore.dispatch(getUserData())
        authenticated = true
  }
}

function App() {
  return (
    <Router>
    <div className="App">
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
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

>>>>>>> master

>>>>>>> master
      {routes}

    </div>
    </Router>
  );
}

export default App;
