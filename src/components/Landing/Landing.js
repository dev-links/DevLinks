import React, {Component} from 'react';
import {Redirect, Link} from 'react-router-dom';
import './Landing.css';

class Landing extends Component {
    constructor() {
        super();
        this.state = {
            
        }
    }

    render() {
        return (
            <div className='landing-container'>

            <div id= 'landing-image-container'><img id='landing-image' src='https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' /></div>

            <div className='dev'>
                DEV
            </div>

            <div className='links'>
                LINKS
            </div>

                <Link to='/client-register'><button className='signup-button'>
                        SIGN UP
                    </button></Link>

                    <Link to='/login'><button className='signin-button'>
                        SIGN IN
                    </button></Link>
            </div>
        )
    }
}

export default Landing;