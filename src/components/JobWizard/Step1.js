import React, {Component} from 'react';
import {connect} from 'react-redux';
import {handleCompany, handleJobTitle, handleAddress, handleCity, handleState, handleZipcode} from '../../redux/jobReducer' ;
import {Link} from 'react-router-dom';
import { Col, Form, FormGroup, Label, Input, FormText, Row } from 'reactstrap';
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
            <div>
                <Row>
                <Col sm={{size: 10, offset: 4}} >
                <h1>Begin your Job Post Here</h1>
                </Col>
                </Row>
                <br/>
                <Form className='step1-container'>
                    <FormGroup>
                    <Col sm={{size:4, offset:4}}>
                    <Input
                    placeholder='Company name'
                    onChange={e=>this.handleChange(e)}
                    value={this.state.Company}
                    name='Company'
                    id='input-id'/>
                    </Col>
                    </FormGroup>
                    <br/>
                    <FormGroup>
                    <Col sm={{size:4, offset:4}}>
                    <Input
                    placeholder='Job Title'
                    onChange={e=>this.handleChange(e)}
                    value={this.state.JobTitle}
                    name='JobTitle'
                    id='input-id'/>
                    </Col>
                    </FormGroup>
                    <br/>
                    <FormGroup>
                    <Col sm={{size:4, offset:4}}>
                    <Input
                    placeholder='Address'
                    onChange={e=>this.handleChange(e)}
                    value={this.state.Address}
                    name='Address'
                    id='input-id'/>
                    </Col>
                    </FormGroup>
                    <br/>
                    <FormGroup>
                    <Col sm={{size:4, offset:4}}>
                    <Input
                    placeholder='City'
                    onChange={e=>this.handleChange(e)}
                    value={this.state.City}
                    name='City'
                    id='input-id'/>
                    </Col>
                    </FormGroup>
                    <br/>
                    <FormGroup>
                    <Col sm={{size:4, offset:4}}>
                    <Input
                    placeholder='State'
                    onChange={e=>this.handleChange(e)}
                    value={this.state.State}
                    name='State'
                    id='input-id'/>
                    </Col>
                    </FormGroup>
                    <br/>
                    <FormGroup>
                    <Col sm={{size:4, offset:4}}>
                    <Input
                    placeholder='Zipcode'
                    onChange={e=>this.handleChange(e)}
                    value={this.state.Zipcode}
                    name='Zipcode'
                    id='input-id'/>
                    </Col>
                     </FormGroup>
                    <br/>
                    <FormGroup>
                    <Link to='/Step2'>
                    <Col sm={{ size: 10, offset:5 }}>
                    <button 
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