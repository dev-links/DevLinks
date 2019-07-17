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