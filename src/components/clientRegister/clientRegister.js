import React, {Component} from 'react';
// import {Link} from 'react-router-dom';
import './clientRegister.css';

class clientRegister extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            firstName: '',
            lastName: '',
            // redirect: false
        }
    } 

    render() {
        return (
            //need to change login container
            <div className='login-container'>
                <div className='dev'>
                    DEV
                </div>

                <div className='links'>
                    LINKS
                </div>

                <h1 className='login-username-placeholder'>USERNAME</h1>

                <input id='login-username' className='register-input' />

                <h1 className='login-password-placeholder'>PASSWORD</h1>

                <input id='login-password' className='register-input' type='password' />

                <h1 className='firstname-placeholder'>FIRST NAME</h1>

                <input id='register-firstName' className='register-input' />

                <h1 className='lastName-placeholder'>LAST NAME</h1>

                <input id='register-lastName' className='register-input' />

                <button className='client-register'>REGISTER</button>

                <button className='employer-button'>EMPLOYER</button>

                {/* Add line */}
                <button className='client-button'>CLIENT</button>
            </div>
        )
    }
}

export default clientRegister;