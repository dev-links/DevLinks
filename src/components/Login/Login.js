import React, {Component} from 'react';
// import {Link} from 'react-router-dom';
import './Login.css';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            // redirect: false
        }
    } 

    render() {
        return (
            <div className='login-container'>
                <div className='dev'>
                    DEV
                </div>

                <div className='links'>
                    LINKS
                </div>

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

                <button>
                    {/* GITHUB */}
                    <img className='github' src='https://cdn0.iconfinder.com/data/icons/octicons/1024/mark-github-256.png' />
                </button>

                <button>
                    {/* GOOGLE */}
                    <img className='google' src='https://cdn1.iconfinder.com/data/icons/social-media-icon-1/112/google-plus-256.png' />
                </button>
            </div>
        )
    }
}

export default Login;