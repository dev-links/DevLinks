import React from 'react'
import { Switch, Route } from "react-router-dom";
import App from './App';
import Step1 from './components/JobWizard/Step1';
import Step2 from './components/JobWizard/Step2';
import ChatRoom from './components/ChatRoom'
import Landing from './components/Landing/Landing';
import Login from './components/Login/Login';
import ClientRegister from './components/clientRegister/clientRegister';
import AdminRegister from './components/adminRegister/adminRegister';

export default (
    <Switch>
        <Route exact path='/app' component={App}/>
        <Route path='/Step1' component={Step1}/>
        <Route path='/Step2' component={Step2}/>

        <Route exact path='/' component={Landing} />
        <Route path='/login' component={Login} />
        <Route path='/client-register' component={ClientRegister} />
        <Route path='/admin-register' component={AdminRegister} />
        <Route path='/chat' component={ChatRoom} />
    </Switch>
)
