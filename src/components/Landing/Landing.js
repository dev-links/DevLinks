import React, {Component} from 'react';
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

                <button className='signup-button'>
                        SIGN UP
                    </button>

                    <button className='signin-button'>
                        SIGN IN
                    </button>
            </div>
        )
    }
}

export default Landing;