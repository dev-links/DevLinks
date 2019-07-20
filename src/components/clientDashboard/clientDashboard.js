import React, {Component} from 'react';
import NavBar from '../NavBar/NavBar'
import './clientDashboard.css';
import { connect } from 'react-redux'

class ClientDashboard extends Component {
    constructor() {
        super();
        this.state = {
            
        }
    }

    // ClientDashboard - Firebase
    componentDidMount() {
        console.log(this.props.credentials)
    }

    render() {
        return (
            <div>
                <NavBar />
                <div>
                    <img className='header-picture' src='https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' />
                </div>

                <div className='white-container'>
                    {/* White space */}
                </div>

                <div className='profile-container'>
                    <img className='profile-pic' src='https://images.pexels.com/photos/555790/pexels-photo-555790.png?auto=compress&cs=tinysrgb&dpr=2&w=500' />
                </div>

                <div className='name-container'>
                    <h1 className='name'>Alexander Williams</h1>
                </div>

                <div>
                    <h1 className='bio'>Web Developer in DFW | JavaScript | React.JS</h1>
                </div>

                <div id='about-container' className='white-container'>
                    <h1 className='card-title'>About</h1>
                    <img id='about-edit' src='https://cdn0.iconfinder.com/data/icons/entypo/78/pencil5-512.png' />
                </div>

                <div>
                    <h1 className='about-paragraph'>This web developer sample job description 
                        can assist in your creating a job 
                        application that will attract job candidates 
                        who are qualified for the job. </h1>
                </div>

                <div id='experience-container' className='white-container'>
                    <h1 className='card-title'>Experience</h1>
                    <img id='experience-edit' src='https://cdn0.iconfinder.com/data/icons/entypo/78/pencil5-512.png' />
                </div>

                <div>
                    <h1 id='line1-experience' className='experience-paragraph'>Student
                        DevMountain Student Developers
                        Apr 2019 - present</h1>
                </div>

                <div>
                    <h1 id='line2-experience' >BlueLife
                        March 2018 - 2019
                    </h1>
                </div>

            
            </div>
        )
    }
}

function mapStateToProps(state) {
    let { credentials } = state
    return { credentials }
}

export default connect()(ClientDashboard);