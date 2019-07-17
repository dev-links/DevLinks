import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
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
                <Link to='/'><div className='dev'>
                    DEV
                </div></Link>

                <Link to='/'><div className='links'>
                    LINKS
                </div></Link>

                <h1 className='admin-username-placeholder'>USERNAME</h1>

                <input id='admin-username' className='register-admin-input' />

                <h1 className='admin-password-placeholder'>PASSWORD</h1>

                <input id='admin-password' className='register-admin-input' type='password' />

                <h1 className='company-placeholder'>COMPANY</h1>

                <input id='register-company' className='register-admin-input' />

                <button className='admin-register'>REGISTER</button>

                {/* Add line */}
                <Link to='admin-register'><button className='employer-button'>EMPLOYER</button></Link>

                <Link to='client-register'><button className='client-button'>CLIENT</button></Link>
            </div>
        )
    }
}

export default adminRegister;