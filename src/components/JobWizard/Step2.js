import React, {Component} from 'react';
import {connect} from 'react-redux';
import {handleJobDescription,handleEmploymentTypeMenu,handleSeniorityLevelMenu,handleVisaStatusMenu,handleSubmitResumeMenu,handleEducationMenu} from '../../redux/jobReducer' ;



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
        e.preventDefault()
        let {JobDescription,
        EmploymentTypeMenu,
        SeniorityLevelMenu,
        VisaStatusMenu,
        SubmitResumeMenu,
        EducationMenu,} = this.state
        this.props.handleJobDescription(JobDescription)
        this.props.handleEmploymentTypeMenu(EmploymentTypeMenu)
        this.props.handleSeniorityLevelMenu(SeniorityLevelMenu)
        this.props.handleVisaStatusMenu(VisaStatusMenu)
        this.props.handleSubmitResumeMenu(SubmitResumeMenu)
        this.props.handleEducationMenu(EducationMenu)
    }


    render(){
        return (
        <div className='step2-container'>
            <h1>Step 2: What job do you want to post</h1>
            <br/>
            <form className='form-container'>
            <h3>Company</h3>
            <input
            type='text'
            name='Company'
            onChange={e=>this.handleChange(e)}/>
            <br/>
            <h3>Job Title</h3>
            <input
            type='text'
            name='JobTitle'
            onChange={e=>this.handleChange(e)}/>
            <br/>
            <h3>Location</h3>
            <input
            type='text'
            name='Location'
            onChange={e=>this.handleChange(e)}/>
            <br/>
            <h3>Employment Type</h3>
            <select onClick={this.EmploymentTypeMenu}
            name='EmploymentTypeMenu'>
                <option>Choose one...</option>
                <option>Full-Time</option>
                <option>Part-Time</option>
                <option>Internship</option>
                <option>Not Applicable</option>
            </select>
            <br/>
            <h3>Seniority Level</h3>
            <select onClick={this.SeniorityLevelMenu}
            name='SeniorityLevelMenu'>
                <option>Choose one...</option>
                <option>Entry Level</option>
                <option>Associate</option>
                <option>Mid-Senior Level</option>
                <option>Not Applicable</option>
            </select>
            <br/>
            <h3>Job Description</h3>
            <input
            type='text'
            name='JobDescription'
            onChange={e=>this.handleChange(e)}
            />
            <br/>
            <h3>Visa Status</h3>
            <h4>Will you now, or in the future, require sponsorship for employment visa status (e.g. H-1B visa status)?</h4>
            <select onClick={this.VisaStatusMenu}
            name='VisaStatusMenu'>
                 <option>Choose one...</option>
                <option>yes</option>
                <option>No</option>  
            </select>
            <br/>
            <h3>Submit Resume</h3>
            <h4>Do you want the candidate to submit a resume?</h4>
            <select onClick={e=>this.handleChange(e)}
            name='SubmitResumeMenu'>
                <option>Choose one...</option>
                <option>yes</option>
                <option>No</option>            
            </select>
            <br/>
            <h3>Education</h3>
            <h4>Preferred level of education</h4>
            <select onClick={e=>this.handleChange(e)}
            name='EducationMenu'>
                <option>Choose one...</option>
                <option>High Diploma or equivalent and higher</option>
                <option>Associate's Degree and higher</option>
                <option>Bachelor's Degree and higher</option>
                <option>Master's Degree and higher</option>
            </select>
            <br/>
            <button
            onClick={e=>this.handleStep2(e)}>Submit</button>
            </form>
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    const {JobDescription, EmploymentTypeMenu, SeniorityLevelMenu,VisaStatusMenu,SubmitResumeMenu,EducationMenu} = state
    return {
        JobDescription,
            EmploymentTypeMenu,
            SeniorityLevelMenu,
            VisaStatusMenu,
            SubmitResumeMenu,
            EducationMenu
    }
    }
    export default connect(mapStateToProps,{handleJobDescription,handleEmploymentTypeMenu,handleSeniorityLevelMenu,handleVisaStatusMenu,handleSubmitResumeMenu,handleEducationMenu})(Step2)