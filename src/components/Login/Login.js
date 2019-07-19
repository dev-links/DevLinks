import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import axios from 'axios'
import {connect} from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import './Login.css';
import 'bootstrap-social';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            errors: {},
            loading: false,
            redirect: false
        }
    } 

    handleClick = (e) => {
        e.preventDefault();
        this.setState({
            loading : true
        })
        const userData = {
            email : this.state.email,
            password : this.state.password
        }
        axios.post('/login', userData)
        .then(res => {
            console.log(res.data)
            localStorage.setItem('FBIdToken', `Bearer ${res.data.token}`)
            this.setState({
                loading: false
            })
            this.props.history.push('/')
        })
        .catch(err => {
            this.setState({
                errors: err.data,
                loading: false
            })
        })
    }

    handleChange = (e) => {
        console.log(e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {

        //Checking to see if client or admin
        // if(this.state.redirect === true && this.state.user.admin === true) {
        //     console.log('Logged in as Employer')
        //     return <Redirect to='admin-dashboard' />
        // }
        // if(this.state.redirect === true && this.state.user.admin === false) {
        //     console.log('Logged in as Client')
        //     return <Redirect to='client-dashboard' />
        // }

        return (
            <div className='login-container'> 

                <Link to='/'><div id='login-dev'>
                    DEV
                </div></Link>

                <Link to='/'><div id='login-links'>
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

                <Button variant="contained" color="primary" id='login-button'>
                    Log in
                </Button>

                <input id='login-username' className='input'  name='email' type='email' value={this.state.email} onChange={this.handleChange}/>

                <label id='line-1'></label>

                <input id='login-password' className='input' name='password' type='password' value={this.state.password} onChange={this.handleChange} />

                <button className='login-button' onClick={this.handleClick} >
                    LOGIN
                </button>

                <label><img id='github-icon' src='https://cdn3.iconfinder.com/data/icons/free-social-icons/67/github_circle_gray-256.png' /></label>

                <a class="btn btn-block btn-social btn-google" id='google'>
                    <span class="fa fa-twitter"></span> Sign in with Google
                </a>

                <img id='google-icon' src='https://cdn1.iconfinder.com/data/icons/social-media-icon-1/112/google-plus-256.png' />
                    {/* GOOGLE */}
                    {/* <img className='google' src='https://cdn1.iconfinder.com/data/icons/social-media-icon-1/112/google-plus-256.png' /> */}
            </div>
        )
    }
}

export default Login;