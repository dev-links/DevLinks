import React, {Component} from 'react';
import NavBar from '../NavBar/NavBar'
import './clientDashboard.css';
import { connect } from 'react-redux'
import travel from '../../assets/travelpic.PNG'
import { Button, Container, Row, Col } from 'reactstrap'

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
        <div className='dash-container'>
            <NavBar />
            <Container className='header-container'>
                <Row className='header'>
                    <Col  xs='12' >
                    <img className='header-pic' src={travel} />
                    </Col>
                </Row>
                <Row>
                    <Col  xs='3' >
                    <img className='profile-header-pic' src="https://images.pexels.com/photos/555790/pexels-photo-555790.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt=""/>
                    </Col>
                </Row>
                <Row className='header-info'>
                <Col xs='6' className='header-info-left' >
                    <h2>First LastName</h2>
                    <h5>Full Stack Developer</h5>
                    <h6>Dallas, Texas</h6>
                </Col>
                <Col xs='2'></Col>
                <Col  xs='4' className='header-info-right'>
                    <img src="#" alt="edit"/>
                    <Button>Contact Info</Button>
                </Col>
                
                </Row>
                <Row>
                    <Col className='about-container'>
                    <div className='about-header'>
                    <h3>About</h3>
                    <img src="#" alt="edit"/>
                    </div>
                    <div className="about-info">
                        {/* add editable input textarea */}
                    </div>
                    </Col>
                </Row>
                <Row>
                    <Col className='about-container'>
                    <div className='about-header'>
                    <h3>Experience</h3>
                    <img src="#" alt="edit"/>
                    </div>
                    <div className="about-info">
                        {/* add editable input textarea */}
                    </div>
                    </Col>
                </Row>
                <Row>
                    <Col className='about-container'>
                    <div className='about-header'>
                    <h3>Education</h3>
                    <img src="#" alt="edit"/>
                    </div>
                    <div className="about-info">
                        {/* add editable input textarea */}
                    </div>
                    </Col>
                </Row>
                <Row>
                    
                    <Col className='about-container'>
                    <div className='about-header'>
                    <h3>Skills</h3>
                    <img src="#" alt="edit"/>
                    </div>
                    {/* add dropdown for skills */}
                    {/* list skills */}
                    </Col>
                    
                </Row>
            </Container>
            
            
            </div>
            
               

            
            
        )
    }
}

function mapStateToProps(state) {
    let { credentials } = state
    return { credentials }
}

export default connect()(ClientDashboard);