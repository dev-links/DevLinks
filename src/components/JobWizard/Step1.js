import React, {Component} from 'react';
import {connect} from 'react-redux';
import {handleCompany, handleJobTitle, handleAddress, handleCity, handleState, handleZipcode} from '../../redux/jobReducer' ;
import {Link} from 'react-router-dom';
import axios from 'axios'

class Step1 extends Component {
    constructor(){
        super()
        this.state = {
            Company: '',
            JobTitle: '',
            Address: '',
            City: '',
            State: '',
            Zipcode: ''
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
        let {Company, JobTitle, Address,City,State,Zipcode} = this.state
        this.props.handleCompany(Company)
        this.props.handleJobTitle(JobTitle)
        this.props.handleAddress(Address)
        this.props.handleCity(City)
        this.props.handleState(State)
        this.props.handleZipcode(Zipcode)



    }


    render(){
        console.log(this.props)
        console.log(this.state.Address)
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
                    placeholder='Address'
                    onChange={e=>this.handleChange(e)}
                    value={this.state.Address}
                    name='Address'/>
                    <br/>
                    <input
                    placeholder='City'
                    onChange={e=>this.handleChange(e)}
                    value={this.state.City}
                    name='City'/>
                    <br/>
                    <input
                    placeholder='State'
                    onChange={e=>this.handleChange(e)}
                    value={this.state.State}
                    name='State'/>
                    <br/>
                    <input
                    placeholder='Zipcode'
                    onChange={e=>this.handleChange(e)}
                    value={this.state.Zipcode}
                    name='Zipcode'/>
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
const {Company, JobTitle, Address, City, State, Zipcode} = state
return {
    Company,
    JobTitle,
    Address,
    City,
    State,
    Zipcode
}
}
export default connect(mapStateToProps,{handleCompany, handleJobTitle,handleAddress, handleCity, handleState,handleZipcode})(Step1)