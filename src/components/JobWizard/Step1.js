import React, {Component} from 'react';
import {connect} from 'react-redux';
import {handleCompany, handleJobTitle, handleLocation} from '../../redux/jobReducer' ;
import {Link} from 'react-router-dom';
import axios from 'axios'

class Step1 extends Component {
    constructor(){
        super()
        this.state = {
            Company: '',
            JobTitle: '',
            Location: ''
        }
    }
    componentDidMount(){
        console.log('hello')
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    handleStep1 = (e) => {
        // e.preventDefault()
        let {Company, JobTitle, Location} = this.state
        this.props.handleCompany(Company)
        this.props.handleJobTitle(JobTitle)
        this.props.handleLocation(Location)
    }


    render(){
        console.log(this.props)
        return (
            <div className='step1-container'>
                <h1>Begin your Job Post Here</h1>
                <form className='form-container'>
                    <input
                    placeholder='Company name'
                    onChange={e=>this.handleChange(e)}
                    value={this.state.Company}
                    name='Company'/>
                    <br/>
                    <input
                    placeholder='Job Title'
                    onChange={e=>this.handleChange(e)}
                    value={this.state.JobTitle}
                    name='JobTitle'/>
                    <br/>
                    <input
                    placeholder='Location'
                    onChange={e=>this.handleChange(e)}
                    value={this.state.Location}
                    name='Location'/>
                    <br/>
                    <Link to='/Step2'>
                    <button 
                    onClick={this.handleStep1} 
                    >Start Job Post
                    </button>
                    </Link>
                </form>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
const {Company, JobTitle, Location} = state
return {
    Company,
    JobTitle,
    Location
}
}
export default connect(mapStateToProps,{handleCompany, handleJobTitle, handleLocation})(Step1)