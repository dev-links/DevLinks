import React, {Component} from 'react';
// import {Link} from 'react-router-dom';
import './adminRegister.css';

class adminRegister extends Component {
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
            //need to change login container
            <div className='login-container'>
                <div className='dev'>
                    DEV
                </div>

                <div className='links'>
                    LINKS
                </div>

                <h1 className='admin-username-placeholder'>USERNAME</h1>

                <input id='admin-username' className='register-admin-input' />

                <h1 className='admin-password-placeholder'>PASSWORD</h1>

                <input id='admin-password' className='register-admin-input' type='password' />

                <h1 className='company-placeholder'>COMPANY</h1>

                <input id='register-company' className='register-admin-input' />

                <button className='admin-register'>REGISTER</button>

                {/* Add line */}
                <button className='employer-button'>EMPLOYER</button>

                <button className='client-button'>CLIENT</button>
            </div>
        )
    }
}

export default adminRegister;