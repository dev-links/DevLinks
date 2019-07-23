import React, {Component} from 'react';
import {connect} from 'react-redux';
import {handleJobTitle,handleJobDescription,handleEmploymentTypeMenu,handleSeniorityLevelMenu,
handleVisaStatusMenu,handleSubmitResumeMenu,handleEducationMenu,handleJobListings} from '../../redux/jobReducer' ;
import firestore from '../../config/Firebase';
import {  Form, FormGroup,  Input,  Row, Col } from 'reactstrap';
import '../JobWizard/Step2.css'
import {Link} from 'react-router-dom';




class Step2 extends Component {
    constructor(){
        super()
        this.state = {
            JobDescription: '',
            EmploymentTypeMenu:'',
            SeniorityLevelMenu:'',
            VisaStatusMenu: '',
            SubmitResumeMenu:'',
            EducationMenu: '',
        }
        
    }

    
    
    handleChange =(e)=> {
        e.preventDefault();
        this.setState({[e.target.name]: e.target.value})
    }
    handleStep2 = (e) =>{
        // e.preventDefault()
        let {
        JobDescription,
        EmploymentTypeMenu,
        SeniorityLevelMenu,
        VisaStatusMenu,
        SubmitResumeMenu,
        EducationMenu,} = this.state
        if(e =''){
            alert('Please fill out all information')
        } else {
        let {Company,Address,City,State,Zipcode,JobTitle} = this.props
        this.props.handleJobTitle(JobTitle)
        this.props.handleJobDescription(JobDescription)
        this.props.handleEmploymentTypeMenu(EmploymentTypeMenu)
        this.props.handleSeniorityLevelMenu(SeniorityLevelMenu)
        this.props.handleVisaStatusMenu(VisaStatusMenu)
        this.props.handleSubmitResumeMenu(SubmitResumeMenu)
        this.props.handleEducationMenu(EducationMenu)
        this.props.handleJobListings({
            Company, 
            JobTitle, 
            Location, 
            JobDescription, 
            EmploymentTypeMenu, 
            SeniorityLevelMenu,
            VisaStatusMenu,
            SubmitResumeMenu,
            EducationMenu,
            Address,
            City,
            State,
            Zipcode
        }) 
        const db = firestore.firestore();
        
        const jobListings = db.collection('jobListings').add({
            Company,Address,City,State,Zipcode,
            JobTitle,
            JobDescription,
            EmploymentTypeMenu,
            SeniorityLevelMenu,
            VisaStatusMenu,
            SubmitResumeMenu,
            EducationMenu,

          })};
    }


    render(){
        let {Company,JobTitle,Address,City,State,Zipcode} = this.props
        return (
        <div className='step2-container'>
            <Row form>
            <Col sm={{size: 10, offset: 4}} >
            <h1 className='title'>What job would you like to post?</h1>
            </Col>
            </Row>
            <Form>
            <FormGroup>
             <h3>Company</h3>
             <br/>
             <Col sm={4}>
            <Input className='input1'
            type='text'
            name='Company'
            value={`${Company}`}
            onChange={e=>this.handleChange(e)}/>
            </Col>
            </FormGroup>
            <br/>
            <h3>Job Title</h3>
            <br/>
            <Col sm={4}>
            <Input className='input1'
            type='text'
            name='JobTitle'
            value={`${JobTitle}`}
            onChange={e=>this.handleChange(e)}/>
             </Col>

            <br/>
            <h3>Location</h3>
            <br/>
            <Col sm={4}>
            <Input
            type='text'
            name='Location'
            value={`${Address} ${City}, ${State} ${Zipcode}`}
            onChange={e=>this.handleChange(e)}/>
            </Col>
            <br/>
            <br/>
            <h3>Employment Type</h3>
            <select className='select1'onChange={e=>this.handleChange(e)}
            name='EmploymentTypeMenu'>
                <option>Choose one...</option>
                <option>Full-Time</option>
                <option>Part-Time</option>
                <option>Internship</option>
                <option>Not Applicable</option>
            </select>
            <br/>
            <br/>
            <h3>Seniority Level</h3>
            <select className='select2'onChange={e=>this.handleChange(e)}
            name='SeniorityLevelMenu'>
                <option>Choose one...</option>
                <option>Entry Level</option>
                <option>Associate</option>
                <option>Mid-Senior Level</option>
                <option>Not Applicable</option>
            </select>
            <br/>
            <br/>
            <h3>Job Description</h3>
            <br/>
            <Col sm={4}>
            <Input
            type='textarea'
            name='JobDescription'
            onChange={e=>this.handleChange(e)}
            />
            </Col>
            <br/>
            <br/>
            <h3>Visa Status</h3>
            <h4>Will you now, or in the future, require sponsorship for employment visa status (e.g. H-1B visa status)?</h4>
            <select className='select3'onChange={e=>this.handleChange(e)}
            name='VisaStatusMenu'>
                 <option>Choose one...</option>
                <option>yes</option>
                <option>No</option>  
            </select>
            <br/>
            <br/>
            <h3>Submit Resume</h3>
            <h4>Do you want the candidate to submit a resume?</h4>
            <select className='select4'onChange={e=>this.handleChange(e)}
            name='SubmitResumeMenu'>
                <option>Choose one...</option>
                <option>yes</option>
                <option>No</option>            
            </select>
            <br/>
            <br/>
            <h3>Education</h3>
            <h4>Preferred level of education</h4>
            <select className='select5'onChange={e=>this.handleChange(e)}
            name='EducationMenu'>
                <option>Choose one...</option>
                <option>High Diploma or equivalent and higher</option>
                <option>Associate's Degree and higher</option>
                <option>Bachelor's Degree and higher</option>
                <option>Master's Degree and higher</option>
            </select>
            <br/>
            <br/>
            <Link to='/client-dashboard'>
            <button className='submit-button'
            onClick={e=>this.handleStep2(e)}>Submit</button>
            </Link>
            <br/>
            <br/>
            </Form>   
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    const {Company, JobTitle, Location, JobDescription, EmploymentTypeMenu, SeniorityLevelMenu,VisaStatusMenu,SubmitResumeMenu,EducationMenu,Address,City,State,Zipcode, JobListing} = state

    return {
        Company,
        JobTitle,
        Location,
        JobDescription,
        EmploymentTypeMenu,
            SeniorityLevelMenu,
            VisaStatusMenu,
            SubmitResumeMenu,
            EducationMenu,
            Address,
        City,
        State,
        Zipcode,
        JobListing
    }
    }
    export default connect(mapStateToProps,{handleJobTitle,handleJobDescription,handleEmploymentTypeMenu,handleSeniorityLevelMenu,handleVisaStatusMenu,handleSubmitResumeMenu,handleEducationMenu,handleJobListings})(Step2)