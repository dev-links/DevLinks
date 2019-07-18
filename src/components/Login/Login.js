import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import {loginUser} from '../../redux/actions/userAction';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import './Login.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
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

                <input id='login-username' className='input' onChange={this.handleChange} />

                <h1 className='login-password-placeholder'>PASSWORD</h1>

                <input id='login-password' className='input' type='password' onChange={this.handleChange} />

                <button className='login-button' onSubmit={this.handleSubmit}>
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
    loginUser
}

export default connect(mapStateToProps, mapActionsToProps)(Login)