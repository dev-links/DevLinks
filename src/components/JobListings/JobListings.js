import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import firestore from '../../config/Firebase'

import '../JobListings/JobListings.css'
import GoogleMapReact from 'google-map-react'
import Axios from 'axios';



const mapStyles = {
    width: '50%',
    height: '50%',
    
  }


 
 class JobListings extends Component {
    constructor(props) {
      super(props);
      this.state = {
        locations: [],
        jobs:'',
        Address:'1 Hacker Way Menlo Park, CA 94025',
        lat: "",
      lng: ""
      }

    }
    
    handleChange = jobs => {
      this.setState({ jobs });
    };
    componentDidMount(){
      let locations = this.state
      Axios.get('https://Dev-Links.firebaseio.com/jobListings/.json?auth=8BAXB62tMF2F9FrgFETKa7AQ3AmE1dfSfaLGwkng')
      .then( data => {
        this.setState({locations: data.data})
      })
      navigator.geolocation.getCurrentPosition(
        function(position) {
          this.setState({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
          console.log(this.state.lat, this.state.lng);
        }.bind(this)
      );
    }

    displayMarkers = () => {
      return this.state.locations.map((jobs, index) => {
        return <Marker 
        key={index} 
        id={index} 
        position={{
         lat: jobs.latitude,
         lng: jobs.longitude
       }}
        />
      })
    }

    render() {
      console.log(this.state.locations)
      return (
        <div>
            {/* <form>
            <h1>Job Listings</h1>
            <input
            placeholder='Search jobs'
            type='text'/>
            <input
            placeholder='Search location'
            type='text'/>
            <button>Search</button>
            </form> */}
            
          
            <Map className='map-container'
            google={this.props.google}
            zoom={15}
            style={mapStyles}
            initialCenter={{ lat: 32.7777, lng: -96.7955}}
            >
            <Marker position={{ lat: 32.7777, lng: -96.7955}} />
            {/* {this.displayMarkers()} */}
          </Map>
         
            </div>
      );
    }
  }

  export default  
  GoogleApiWrapper({
    apiKey: 'AIzaSyD_EZ0L3z6RTmVbrPG1Z1IZ3zsuZopE-aQ'
  })(JobListings);