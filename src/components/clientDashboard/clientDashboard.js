import React, {Component} from 'react';
import NavBar from '../NavBar/NavBar'
import './clientDashboard.css';
import { connect } from 'react-redux'
import { Button, Container, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import firestore from '../../config/Firebase';
import {editUserDetails} from '../../redux/actions/userAction'


class ClientDashboard extends Component {
    constructor() {
        super();
        this.state = {
            modalContact: false,
            modalAbout: false,
            modalExperience: false,
            modalEducation: false,
            modalSkills: false,
            firstName:'',
            lastName:'',
            location:'',
            email:'',
            phone: '',
            repository:'',
            portfolio:'',
            about:'',
            experience:'',
            education:'',
            skills:[],
            skillsInput:''
        }
    }

    

    // ClientDashboard - Firebase
    componentDidMount() {
        console.log(this.props.credentials) 
    }

    handleChange = e => {
        this.setState({ [e.target.name]:e.target.value})
    }

    toggleContact = () => {
        let { modalContact } = this.state
        if(modalContact === true) {
            this.setState({ modalContact: false })
        } else {
            this.setState({ modalContact: true })
        }
    };

    toggleAbout = () => {
        let { modalAbout } = this.state
        if(modalAbout === true) {
            this.setState({ modalAbout: false })
        } else {
            this.setState({ modalAbout: true })
        }
        
    };

    toggleExperience = () => {
        let { modalExperience } = this.state
        if(modalExperience === true) {
            this.setState({ modalExperience: false })
        } else {
            this.setState({ modalExperience: true })
        }
        
    };

    toggleEducation = () => {
        let { modalEducation } = this.state
        if(modalEducation === true) {
            this.setState({ modalEducation: false })
        } else {
            this.setState({ modalEducation: true })
        }
        
    };

    toggleSkills = () => {
        let { modalSkills } = this.state
        if(modalSkills === true) {
            this.setState({ modalSkills: false })
        } else {
            this.setState({ modalSkills: true })
        }
        
    };

    addContact = () => {
        let {email, phone, repository, portfolio } = this.state
        const db = firestore.firestore();

        // need to reference current user session FIX
        db.collection('users').add({
            email,
            phone,
            repository,
            portfolio

        });
    }

    addSkill = () => {
        let {skills} = this.props.credentials
        let { skillsInput } = this.state
        let copySkills = skills.slice()
        copySkills.push(skillsInput)
        this.setState({ skills:copySkills })
    }



    
    render() {
        console.log(this.state.modalContact)
        console.log(this.props.credentials.skills)
        console.log(this.props.credentials)
        const {user: {
            credentials : {handle, createAt, imageUrl, bio, website, location, address, birthDay, 
                education, email, experience, firstName, lastName,headerUrl, jobTitle, phoneNumber, skills}
        }} = this.props
        return (
        <div>
            <NavBar />
        <div className='dash-container'>
            <Container className='header-container'>
                <div className='header'>
                <Row>
                    <Col>
                    <img className='header-pic' src={headerUrl} alt='header' />
                    </Col>
                </Row>
                <Row>
                    <Col >
                    <img id='profile-header-pic' src={imageUrl} alt=""/>
                    </Col>
                </Row>
                <Row className='header-info'>
                <Col className='header-info-left' >
                    {/* reference the user session to fill these headers in */}
                    <h2>{firstName} {lastName}</h2>
                    <h5>{jobTitle}</h5>
                    <h6>{location}</h6>
                </Col>
                <Col></Col>
                <Col className='header-info-right'>
            
                    <Button color="primary" onClick={this.toggleContact}>Contact Info</Button>
                    <Modal isOpen={this.state.modalContact} toggle={this.toggleContact}>
                        <ModalHeader toggle={this.toggleContact}>Contact Info</ModalHeader>
                        <ModalBody>
                        <Form>
                        <FormGroup>
                        <FormGroup>
                            <Input type="text" name="firstName"  placeholder="First name" 
                            onChange={e => this.handleChange(e)}
                            />
                            </FormGroup>
                            <FormGroup>
                            <Input type="text" name="lastName" placeholder="Last name" 
                            onChange={e => this.handleChange(e)}
                            />
                            </FormGroup>
                            <FormGroup>
                            <Input type="text" name="location" placeholder="123 Main St. Dallas, TX" 
                            onChange={e => this.handleChange(e)}
                            />
                            </FormGroup>
                            <Input type="email" name="email"  placeholder="email" 
                            onChange={e => this.handleChange(e)}
                            />
                            </FormGroup>
                            <FormGroup>
                            <Input type="text" name="phone" placeholder="877-867-5309" 
                            onChange={e => this.handleChange(e)}
                            />
                            </FormGroup>
                            <FormGroup>
                            <Input type="text" name="repository" placeholder="Github" 
                            onChange={e => this.handleChange(e)}
                            />
                            </FormGroup>
                            <FormGroup>    
                            <Input type="text" name="portfolio" placeholder="MyPortfolio.com" 
                            onChange={e => this.handleChange(e)}
                            />
                            </FormGroup>
                            
                            
                            
                        </Form>
                        </ModalBody>
                        <ModalFooter>
                            {/* add submit button to send to firebase */}
                            <Button color="primary" onClick={() => {
                                this.toggleContact()
                                this.addContact()}}>Save</Button>{' '}
                            <Button color="secondary" onClick={this.toggleContact}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
                </Col>
                
                </Row>
                </div>
                <Row style={{ justifyContent: 'center '}}>
                    <Col className='about-container' xs='10'>
                    <div className='about-header'>
                    <h3>About</h3>
                    <Button color="primary" onClick={this.toggleAbout}>About</Button>
                    <Modal isOpen={this.state.modalAbout} toggle={this.toggleAbout} className={this.props.className}>
                        <ModalHeader toggle={this.toggleAbout}>Tell us about yourself</ModalHeader>
                        <ModalBody>
                        <Form>
                            <FormGroup>
                            <Input type="textarea" name="about" className='textArea'
                            onChange={e => this.handleChange(e)}
                            />
                            </FormGroup>
                            
                        </Form>
                        </ModalBody>
                        <ModalFooter>
                            {/* add submit button to send to firebase */}
                            <Button color="primary" onClick={this.toggleAbout}>Save</Button>{' '}
                            <Button color="secondary" onClick={this.toggleAbout}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
                    </div>
                    <div className="about-info">
                        {bio}
                    </div>
                    </Col>
                </Row>
                <Row style={{ justifyContent: 'center '}}>
                    <Col className='about-container' xs='10'>
                    <div className='about-header'>
                    <h3>Experience</h3>
                    <Button color="primary" onClick={this.toggleExperience}>Experience</Button>
                    <Modal isOpen={this.state.modalExperience} toggle={this.toggleExperience} >
                        <ModalHeader toggle={this.toggleExperience}>Tell us about yourself</ModalHeader>
                        <ModalBody>
                        <Form>
                            <FormGroup>
                            <Input type="textarea" name="experience" className='textArea'
                            onChange={e => this.handleChange(e)}
                            />
                            </FormGroup>
                            
                        </Form>
                        </ModalBody>
                        <ModalFooter>
                            {/* add submit button to send to firebase */}
                            <Button color="primary" onClick={this.toggleExperience}>Save</Button>{' '}
                            <Button color="secondary" onClick={this.toggleExperience}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
                    </div>
                    <div className="about-info">
                        {experience}
                    </div>
                    </Col>
                </Row>
                <Row style={{ justifyContent: 'center '}}>
                    <Col className='about-container' xs='10'>
                    <div className='about-header'>
                    <h3>Education</h3>
                    <Button color="primary" onClick={this.toggleEducation}>Education</Button>
                    <Modal isOpen={this.state.modalEducation} toggle={this.toggleEducation} >
                        <ModalHeader toggle={this.toggleEducation}>Tell us about yourself</ModalHeader>
                        <ModalBody>
                        <Form>
                            <FormGroup>
                            <Input type="textarea" name="experience"
                            onChange={e => this.handleChange(e)}
                            />
                            </FormGroup>
                            
                        </Form>
                        </ModalBody>
                        <ModalFooter>
                            {/* add submit button to send to firebase */}
                            <Button color="primary" onClick={this.toggleEducation}>Save</Button>{' '}
                            <Button color="secondary" onClick={this.toggleEducation}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
                    </div>
                    <div className="about-info">
                        {education}
                    </div>
                    </Col>
                </Row>
                <Row style={{ justifyContent: 'center '}}>
                    
                    <Col className='about-container' xs='10'>
                    <div className='about-header'>
                    <h3>Skills</h3>
                    <Button color="primary" onClick={this.toggleSkills}>Skills</Button>
                    <Modal isOpen={this.state.modalSkills} toggle={this.toggleSkills} >
                        <ModalHeader toggle={this.toggleSkills}>Tell us about yourself</ModalHeader>
                        <ModalBody>
                        <Form>
                            <FormGroup>
                            <Input type="text" name="skillsInput"
                            onChange={e => this.handleChange(e)}
                            />
                            <Button
                            onClick={() => this.addSkill()}
                            >Add</Button>
                            </FormGroup>
                            <div>

                            </div>
                            
                        </Form>
                        </ModalBody>
                        <ModalFooter>
                            {/* add submit button to send to firebase */}
                            <Button color="primary" onClick={this.toggleSkills}>Save</Button>{' '}
                            <Button color="secondary" onClick={this.toggleSkills}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
                    </div>
                    {/* add dropdown for skills */}
                    {skills}
                    </Col>
                    
                </Row>
            </Container>
            
            
            </div>
            </div>
               

            
            
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.user,
    credentials : state.user.credentials
})

export default connect(mapStateToProps ,{editUserDetails})(ClientDashboard);