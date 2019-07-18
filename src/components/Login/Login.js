import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import './Login.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            redirect: false
        }
    } 

    render() {

        //Checking to see if client or admin
        if(this.state.redirect === true && this.state.user.admin === true) {
            console.log('Logged in as Employer')
            return <Redirect to='admin-dashboard' />
        }
        if(this.state.redirect === true && this.state.user.admin === false) {
            console.log('Logged in as Client')
            return <Redirect to='client-dashboard' />
        }

        return (
            <div className='login-container'>

                <div id= 'landing-image-container'><img id='landing-image' src='https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' /></div>


                <Link to='/'><div className='dev'>
                    DEV
                </div></Link>

                <Link to='/'><div className='links'>
                    LINKS
                </div></Link>

                <h1 className='login-username-placeholder'>USERNAME</h1>

                <input id='login-username' className='input' />

                <h1 className='login-password-placeholder'>PASSWORD</h1>

                <input id='login-password' className='input' type='password' />

                <button className='login-button'>
                    LOGIN
                </button>

                <div className='or'>
                    OR
                </div>

                    {/* GITHUB */}
                    <img className='github' src='https://cdn0.iconfinder.com/data/icons/octicons/1024/mark-github-256.png' />

                    {/* GOOGLE */}
                    <img className='google' src='https://cdn1.iconfinder.com/data/icons/social-media-icon-1/112/google-plus-256.png' />
            </div>
        )
    }
}

export default Login;