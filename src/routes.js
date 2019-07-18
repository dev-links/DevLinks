import React from 'react'
import { Switch, Route } from "react-router-dom";
import App from './App';
import Step1 from './components/JobWizard/Step1';
import Step2 from './components/JobWizard/Step2';
import NavBar from './components/NavBar/NavBar';
import ChatRoom from './components/Chat/ChatRoom'
import Landing from './components/Landing/Landing';
import Login from './components/Login/Login';
import ClientRegister from './components/clientRegister/clientRegister';
import AdminRegister from './components/adminRegister/adminRegister';
import ClientDashboard from './components/clientDashboard/clientDashboard';
import AdminDashboard from './components/adminDashboard/adminDashboard';
import ChatDashboard from './components/Chat/ChatDashboard'

export default (
    <Switch>
        <Route exact path='/app' component={App}/>
        <Route path='/Step1' component={Step1}/>
        <Route path='/Step2' component={Step2}/>
        <Route exact path='/' component={Landing} />
        <Route path='/login' component={Login} />
        <Route path='/client-register' component={ClientRegister} />
        <Route path='/admin-register' component={AdminRegister} />
        <Route path='/NavBar' component={NavBar}/>

        <Route path='/client-dashboard' component={ClientDashboard} />
        <Route path='/admin-dashboard' component={AdminDashboard} />

        <Route path='/chat' component={ChatRoom} />
        <Route path='/chatDash' component={ChatDashboard}/>
    </Switch>
)
