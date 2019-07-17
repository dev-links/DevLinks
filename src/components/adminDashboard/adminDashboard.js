import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import './adminDashboard.css';

class adminDashboard extends Component {
    constructor() {
        super();
        this.state = {
            
        }
    }

    render() {
        return (
            <div>
                <div>
                    <img className='header-picture' src='https://images.pexels.com/photos/260689/pexels-photo-260689.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' />
                </div>

                <div className='white-container'>
                    {/* White space */}
                </div>

                <div className='profile-container'>
                    <img className='profile-pic' src='https://cdn3.iconfinder.com/data/icons/popular-services-brands/512/drupal-256.png' />
                </div>

                <div className='name-container'>
                    <h1 className='name'>BlueLife</h1>
                </div>

                <div>
                    <h1 className='bio'>React dev start up company</h1>
                </div>

                <div id='about-container' className='white-container'>
                    <h1 className='card-title'>About Company</h1>
                    <img id='about-edit' src='https://cdn0.iconfinder.com/data/icons/entypo/78/pencil5-512.png' />
                </div>

                <div>
                    <h1 className='about-paragraph'>This web developer sample job description 
                        can assist in your creating a job 
                        application that will attract job candidates 
                        who are qualified for the job. </h1>
                </div>

                <div id='experience-container' className='white-container'>
                    <h1 className='card-title'>Available Jobs</h1>
                    <img id='experience-edit' src='https://cdn0.iconfinder.com/data/icons/entypo/78/pencil5-512.png' />
                </div>

                <div>
                    <h1 id='line1-experience' className='experience-paragraph'>front-end engineer</h1>
                </div>

                <div>
                    <h1 id='line2-experience' >back-end engineer
                    </h1>
                </div>

                <button className='logout'>
                    LOGOUT
                    <img id='bio-edit' src='https://cdn0.iconfinder.com/data/icons/entypo/78/pencil5-512.png' />
                </button>
            </div>
        )
    }
}

export default adminDashboard;