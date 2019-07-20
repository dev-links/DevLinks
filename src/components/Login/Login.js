import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import axios from 'axios'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import './Login.css';

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
            this.props.history.push('/client-dashboard')
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

                <div id= 'landing-image-container'><img id='landing-image' src='https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' /></div>


                <Link to='/'><div className='dev'>
                    DEV
                </div></Link>

                <Link to='/'><div className='links'>
                    LINKS
                </div></Link>

                <h1 className='login-username-placeholder'>USERNAME</h1>

                <input id='login-username' className='input'  name='email' type='email' value={this.state.email} onChange={this.handleChange}/>

                <h1 className='login-password-placeholder'>PASSWORD</h1>

                <input id='login-password' className='input' name='password' type='password' value={this.state.password} onChange={this.handleChange} />

                <button className='login-button' onClick={this.handleClick} >
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