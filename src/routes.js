import React from 'react';
import {Switch, Route, HashRouter} from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Login from './components/Login/Login';
import ClientDashboard from './components/clientDashboard/clientDashboard';

export default (
    <Switch>
        <Route exact path={'/'} component={Landing} />
        <Route path={'/login'} component={Login}/>
        <Route exact path={'/dashboard'} component={ClientDashboard} />
    </Switch>
);