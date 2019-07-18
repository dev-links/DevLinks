import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import axios from 'axios'
import './clientRegister.css';

class clientRegister extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            handle:'',
            loading: false,
            errors: {}
            // firstName: '',
            // lastName: '',
            // redirect: false
        }
    } 

    handleClick = (e) => {
        e.preventDefault();
        this.setState({
            loading : true
        })
        const userData = {
            email : this.state.email,
            password : this.state.password,
            handle: this.state.handle
        }
        axios.post('/signUp', userData)
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
        return (
            //need to change login container
            <div className='login-container'>
                <Link to='/'><div className='dev'>
                    DEV
                </div></Link>

                <Link to='/'><div className='links'>
                    LINKS
                </div></Link>

                <h1 className='firstname-placeholder'>EMAIL</h1>

                <input id='register-firstName' className='register-input'  name='email' type='email' value={this.state.email} onChange={this.handleChange} />

                <h1 className='login-password-placeholder'>PASSWORD</h1>

                <input id='login-password' className='register-input' name='password' type='password' value={this.state.password} onChange={this.handleChange}/>


                <h1 className='login-username-placeholder'>USERNAME</h1>

                <input id='login-username' className='register-input' name='handle' type='handle' value={this.state.handle} onChange={this.handleChange} />

                {/* <h1 className='lastName-placeholder'>LAST NAME</h1>

                <input id='register-lastName' className='register-input' /> */}

                <button className='client-register' onClick={this.handleClick}>REGISTER</button>

                <Link to='admin-register'><button className='employer-button'>EMPLOYER</button></Link>

                {/* Add line */}
                <Link to='client-register'><button className='client-button'>CLIENT</button></Link>
            </div>
        )
    }
}

export default clientRegister;