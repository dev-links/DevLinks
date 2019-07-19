import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import Button from '@material-ui/core/Button';
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
        // const {classes, UI: {loading}} = this.props
        return (
            //need to change login container
            <div className='login-container'>
                <Link to='/'><div id='register-dev'>
                    DEV
                </div></Link>

                <Link to='/'><div id='register-links'>
                    LINKS
                </div></Link>

                <form action="">
                    <div id="email-input-field">
                        <input type="text" id="name" required />
                        <label for="name">Email:</label>
                    </div>
                </form>

                <form action="">
                    <div id="password-input-field">
                        <input type="text" id="name" required />
                        <label for="name">Password:</label>
                    </div>
                </form>

                <Button variant="contained" color="primary" id='register-button'>
                    Register
                </Button>

                <div class="switch-wrap">
                    <input class="switch" id="check1" type="checkbox"/><label for="check1">&nbsp;</label>
                </div>

                <h1 id='employee'>Employee</h1>

                <h1 id='employer'>Employer</h1>
            </div>
        )
    }
}

export default clientRegister;