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
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentWillReceiveProps(nextProps){
        if (nextProps.UI.errors){
            this.setState({
                errors: nextProps.UI.errors
            })
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const userData = {
            email: this.state.email,
            password: this.state.password
        }
        this.props.loginUser(userData, this.props.history)
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
            this.setState({
                loading: false
            })
            this.props.history.push('/')
        })
        .catch(err => {
            this.setState({
                errors: err.response.data,
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
                        <input name='email' type='email' value={this.state.email}  onChange={this.handleChange} type="text" id="name" required />
                        <label for="name">Email:</label>
                    </div>
                </form>

                <form action="">
                    <div id="password-input-field">
                        <input name='password' type='password' value={this.state.password} onChange={this.handleChange} id="name" required />
                        <label for="name">Password:</label>
                    </div>
                </form>

                <Button variant="contained" color="primary" id='login-button' onClick={this.handleClick}>
                    Log in
                </Button>

                <h1 id='or'>Or</h1>

                <label id='line-1'></label>

                <label id='line-2'></label>

                <a class="btn btn-block btn-social btn-github" id='github'>
                    <span class="fa fa-twitter"></span> Sign in with Github
                </a>

                <label><img id='github-icon' src='https://cdn3.iconfinder.com/data/icons/free-social-icons/67/github_circle_gray-256.png' /></label>

                <a class="btn btn-block btn-social btn-google" id='google'>
                    <span class="fa fa-twitter"></span> Sign in with Google
                </a>

                <img id='google-icon' src='https://cdn1.iconfinder.com/data/icons/social-media-icon-1/112/google-plus-256.png' />
            </div>
        )
    }
}

Login.propTypes ={
    loginUser: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    UI: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
    return{
        user: state.user,
        UI: state.UI
    }
}

const mapActionsToProps = {
    // loginUser
}

export default connect(mapStateToProps, mapActionsToProps)(Login)