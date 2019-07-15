import React, {Component} from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
// import axios from 'axios';




class JobListings extends Component {
    constructor(){
        super();
        this.state = { 
            companyLogo: '',
            jobPosition: '',
            companyName: '',
            location: '',
            jobDescription: '',
            geoLocation: '',
            positionLevel: '',
            employmentType: '',
            qualifications: '',
            map: []
        }

        this.handleChange = this.handleChange.bind(this)

       
    }
    handleChange = (e) => {
        this.setState({ [e.target.companyName]: e.target.value});
    }
    render(){
        return (

            <div>
            <h1>Job Listings</h1>
            <Map
            google={this.props.google}
            zoom={8}
            initialCenter={{ lat: 32.78, lng: -96.80}}
          >
          <Marker position={{ lat: 32.78, lng: -96.00}} />
            </Map>
        </div>
    )
    }
}
export default (JobListings , GoogleApiWrapper ({
apiKey: 'AIzaSyD_EZ0L3z6RTmVbrPG1Z1IZ3zsuZopE-aQ'
}));