import React, {Component} from 'react';
import {connect} from 'react-redux';
import {handleCompany, handleJobTitle, handleAddress, handleCity, handleState, handleZipcode} from '../../redux/jobReducer' ;
import {Link} from 'react-router-dom';
import '../JobWizard/Step1.css'
import { Col, Form, FormGroup, Label, Input, FormText, Row } from 'reactstrap';

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
        // if(e ='') {
        //     alert('Please fill out all information')
        // } else {
        let {Company, JobTitle, Address,City,State,Zipcode} = this.state
        this.props.handleCompany(Company)
        this.props.handleJobTitle(JobTitle)
        this.props.handleAddress(Address)
        this.props.handleCity(City)
        this.props.handleState(State)
        this.props.handleZipcode(Zipcode) }
    // }
  


    render(){
        return (
            <div className='body'>
                <Row >
                <Col xs='12' >
                <h1 className='step1-container'>Begin your job post here</h1>
                </Col>
                </Row>
                <br/>
                <Form className='form-container'>
                    <FormGroup>
                    <Col xs='10'>
                    <Input
                    placeholder='Company name'
                    onChange={e=>this.handleChange(e)}
                    value={this.state.Company}
                    name='Company'
                    />
                    </Col>
                    </FormGroup>
                    <br/>
                    <FormGroup>
                    <Col xs='10'>
                    <Input
                    placeholder='Job Title'
                    onChange={e=>this.handleChange(e)}
                    value={this.state.JobTitle}
                    name='JobTitle'
                    />
                    </Col>
                    </FormGroup>
                    <br/>
                    <FormGroup>
                    <Col xs='10'>
                    <Input
                    placeholder='Address'
                    onChange={e=>this.handleChange(e)}
                    value={this.state.Address}
                    name='Address'
                    />
                    </Col>
                    </FormGroup>
                    <br/>
                    <FormGroup>
                    <Col xs='10'>
                    <Input
                    placeholder='City'
                    onChange={e=>this.handleChange(e)}
                    value={this.state.City}
                    name='City'
                    />
                    </Col>
                    </FormGroup>
                    <br/>
                    <FormGroup>
                    <Col xs='10'>
                    <Input
                    placeholder='State'
                    onChange={e=>this.handleChange(e)}
                    value={this.state.State}
                    name='State'
                    />
                    </Col>
                    </FormGroup>
                    <br/>
                    <FormGroup>
                    <Col xs='10'>
                    <Input
                    placeholder='Zipcode'
                    onChange={e=>this.handleChange(e)}
                    value={this.state.Zipcode}
                    name='Zipcode'
                    />
                    </Col>
                     </FormGroup>
                    <br/>
                    <FormGroup>
                    <Link to='/Step2'>
                    <Col sm='10'>
                    <button className='button'
                    onClick={this.handleStep1} 
                    >Start Job Post
                    </button>
                    </Col>
                    </Link>
                    </FormGroup>
                </Form>

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