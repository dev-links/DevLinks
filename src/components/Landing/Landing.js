import React, {Component} from 'react';
import {Redirect, Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './Landing.css';

class Landing extends Component {
    constructor() {
        super();
        this.state = {
            
        }
    }

    render() {
        return (
            <div className='landing-container'>

            <div id= 'landing-image-container'><img id='landing-image' src='https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' /></div>

            <div id='landing-dev'>
                DEV
            </div>

            <div id='landing-links'>
                LINKS
            </div>

            <div class="lds-ripple"><div></div><div></div></div>

            <Link to='/client-register'><Button variant="contained" color="primary" id='signup-button-landing'>
                Sign up
            </Button></Link>

            <Link to='/login'><Button variant="contained" color="primary" id='signin-button-landing'>
                Sign in
            </Button></Link>

            <div class="element"></div>
            </div>
        )
    }
}

export default Landing;