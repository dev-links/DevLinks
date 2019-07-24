import React, { Component } from 'react'
import {connect} from 'react-redux'
import {editUserDetails} from '../../redux/actions/userAction'

class EditDetails extends Component {
    state = {
        bio: '', //About
        website: '',
        location:'',
        firstName:'',
        lastName: '',
        jobTitle: '',
        experience: '',
        education: '',
        skills: '',
        email: '',
        phoneNumber: '',
        address: '',
    }
    componentDidMount(){
        const {credentials} = this.props
        this.mapUserDetailsToState(credentials)
    }

    mapUserDetailsToState = (credentials) => {
        this.setState({
            bio : credentials.bio ? credentials.bio : '',
            website : credentials.website ? credentials.website : '',
            location : credentials.location ? credentials.location : '',
            firstName : credentials.firstName ? credentials.firstName : '',
            lastName : credentials.lastName ? credentials.lastName : '',
            jobTitle : credentials.jobTitle ? credentials.jobTitle : '',
            experience : credentials.experience ? credentials.experience : '',
            education : credentials.education ? credentials.education : '',
            skills : credentials.skills ? credentials.skills : '',
            email : credentials.email ? credentials.email : '',
            phoneNumber : credentials.phoneNumber ? credentials.phoneNumber : '',
            address : credentials.address ? credentials.address : '',
        })
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    credentials : state.user.credentials
})

export default connect(mapStateToProps, {editUserDetails})(EditDetails)
