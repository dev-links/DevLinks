import React from 'react'
import { Switch, Route } from "react-router-dom";
import App from './App';
import Step1 from './components/JobWizard/Step1';
import Step2 from './components/JobWizard/Step2';
import NavBar from './components/NavBar/NavBar';

export default (
    <Switch>
        <Route exact path='/' component={App}/>
        <Route path='/Step1' component={Step1}/>
        <Route path='/Step2' component={Step2}/>
    </Switch>
)
