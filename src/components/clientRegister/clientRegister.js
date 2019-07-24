import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import Button from '@material-ui/core/Button';
// import {registerUser} from "../redux/actions/userAction"
import axios from 'axios'
import './clientRegister.css';
import {connect} from 'react-redux';
import {registerUser} from '../../redux/actions/userAction'

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

        this.props.registerUser(userData, this.props.history)
        // axios.post('/signUp', userData)
        // .then(res => {
        //     console.log(res.data)
        //     this.setState({
        //         loading: false
        //     })
        //     this.props.history.push('/')
        // })
        // .catch(err => {
        //     this.setState({
        //         errors: err.response.data,
        //         loading: false
        //     })
        // })
    }

    handleChange = (e) => {
        console.log(e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        });
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
                        <input name='email' type='email' value={this.state.email} onChange={this.handleChange} type="text" id="name" required />
                        <label for="name">Email:</label>
                    </div>
                </form> 

                <form action="">
                    <div id="password-input-field">
                        <input name='password' type='password' value={this.state.password} onChange={this.handleChange} type="text" id="name" required />
                        <label for="name">Password:</label>
                    </div>
                </form>

                <Button onClick={this.handleClick} variant="contained" color="primary" id='register-button'>
                    Register
                </Button>

                <div class="switch-wrap">
                    <input class="switch" id="check1" type="checkbox"/><label for="check1">&nbsp;</label>
                </div>

                <h1 id='employee'>Employee</h1>

                <h1 id='employer'>Employer</h1>

                {/* <input id='login-username' className='register-input' name='handle' type='handle' value={this.state.handle} onChange={this.handleChange} /> */}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        user: state.user,
        UI: state.UI
    }
}

export default connect(mapStateToProps, {registerUser})(clientRegister);