import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
// import {registerUser} from "../redux/actions/userAction"
import './clientRegister.css';

class clientRegister extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            redirect: false
        }
    } 

    render() {
        const {classes, UI: {loading}} = this.props
        return (
            //need to change login container
            <div className='login-container'>
                <Link to='/'><div className='dev'>
                    DEV
                </div></Link>

                <Link to='/'><div className='links'>
                    LINKS
                </div></Link>

                <h1 className='login-username-placeholder'>USERNAME</h1>

                <input id='login-username' className='register-input' />

                <h1 className='login-password-placeholder'>PASSWORD</h1>

                <input id='login-password' className='register-input' type='password' />

                <h1 className='firstname-placeholder'>FIRST NAME</h1>

                <input id='register-firstName' className='register-input' />

                <h1 className='lastName-placeholder'>LAST NAME</h1>

                <input id='register-lastName' className='register-input' />

                <button className='client-register'>REGISTER</button>

                <Link to='admin-register'><button className='employer-button'>EMPLOYER</button></Link>

                {/* Add line */}
                <Link to='client-register'><button className='client-button'>CLIENT</button></Link>
            </div>
        )
    }
}

export default clientRegister;