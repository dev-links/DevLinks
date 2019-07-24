import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux'
import {loginUser} from '../../redux/actions/userAction'
import PropTypes from 'prop-types';
import './Login.css';
// import {Input} from 'reactstrap';
import Button from '@material-ui/core/Button';



class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            errors: {},
            redirect: false
        }
    } 



    handleClick = (e) => {
        e.preventDefault();
        const userData = {
            email : this.state.email,
            password : this.state.password
        }
        this.props.loginUser(userData, this.props.history)
    }


    handleChange = (e) => {
        console.log(e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        });
    }



    render() {
        return (
            <div className='login-container'>
                <div className='login'>
                    <span id='login-dev'>DEV</span> <span id='login-links'>LINKS</span>
                    {/* <h3>Username</h3>
                    <Input type='text' id='email'
                    name='email' type='email' value={this.state.email} onChange={this.handleChange}
                    /> */}
                    {/* <h3>Password</h3>
                    <Input type='password' id='password'
                    name='password' type='password' value={this.state.password} onChange={this.handleChange}
                    /> */}
                    
                    <Button onClick={this.handleClick} id='login-button' variant="contained" color="primary">
                    Login
                    </Button>

                    <Link to='/admin-register'><Button id='register-button' variant="contained" color="primary">
                    Register
                    </Button></Link>



                    <form action="">
                        <div id="email-input-field">
                            <input type='text' id='email'
                            name='email' type='email' value={this.state.email} onChange={this.handleChange} required />
                            <label className='label' for="name">Email:</label>
                        </div>
                    </form>

                    <form action=''>
                        <div id='password-input-field'>
                            <input type='password' id='password'
                            name='password' type='password' value={this.state.password} onChange={this.handleChange} required />
                            <label className='label' for='name'>Password:</label>
                        </div>
                    </form>

                <div class='lds-ripple'><div></div><div></div></div>

                    {/* <Button id='loginBtn'

                    onClick={this.handleClick}

                    >Login</Button> */}

                    

                    {/* <Link to='/admin-register'>

                    <Button >Register</Button>

                    </Link> */}

                <div className='altSignIn'>

                {/* GITHUB */}

                {/* <img className='github' src='https://cdn0.iconfinder.com/data/icons/octicons/1024/mark-github-256.png' /> */}



                {/* GOOGLE */}

                {/* <img className='google' src='https://cdn1.iconfinder.com/data/icons/social-media-icon-1/112/google-plus-256.png' /> */}

                </div>

                </div>
                

            </div>



            // <div className='login-container'>

            //     <div id= 'landing-image-container'><img id='landing-image' src='https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' /></div>

            //     <Link to='/'><div className='dev'>
            //         DEV
            //     </div></Link>

            //     <Link to='/'><div className='links'>
            //         LINKS
            //     </div></Link>

            //     <h1 className='login-username-placeholder'>USERNAME</h1>

            //     <input id='login-username' className='input'  name='email' type='email' value={this.state.email} onChange={this.handleChange}/>

            //     <h1 className='login-password-placeholder'>PASSWORD</h1>

            //     <input id='login-password' className='input' name='password' type='password' value={this.state.password} onChange={this.handleChange} />

            //     <button className='login-button' onClick={this.handleClick} >
            //         LOGIN
            //     </button>

            //     <div className='or'>
            //         OR
            //     </div>

            //         {/* GITHUB */}
            //         <img className='github' src='https://cdn0.iconfinder.com/data/icons/octicons/1024/mark-github-256.png' />

            //         {/* GOOGLE */}
            //         <img className='google' src='https://cdn1.iconfinder.com/data/icons/social-media-icon-1/112/google-plus-256.png' />
            // </div>
        )
    }
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

export default connect(mapStateToProps, mapActionsToProps)(Login);
