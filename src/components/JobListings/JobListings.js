import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import '../JobListings/JobListings.css'
import GoogleMapReact from 'google-map-react'



const mapStyles = {
    width: '50%',
    height: '50%',
    
  }

 
 class JobListings extends Component {
    constructor(props) {
      super(props);
      this.state = {
        locations: [{lat: 47.49855629475769, lng: -122.14184416996333}],
        jobs:''
      }

    }
    
    handleChange = jobs => {
      this.setState({ jobs });
    };


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
      return (

        
        <div>
            <form>
            <h1>Job Listings</h1>
            <input
            placeholder='Search jobs'
            type='text'/>
            <input
            placeholder='Search location'
            type='text'/>
            <button>Search</button>
            </form>
            
          
            <Map className='map-container'
            google={this.props.google}
            zoom={15}
            style={mapStyles}
            initialCenter={{ lat: 32.7777, lng: -96.7955}}
            >
            <Marker position={{ lat: 32.7777, lng: -96.7955}} />
            {this.displayMarkers()}
          </Map>
         
            </div>
      );
    }
  }

  export default  
  GoogleApiWrapper({
    apiKey: 'AIzaSyD_EZ0L3z6RTmVbrPG1Z1IZ3zsuZopE-aQ'
  })(JobListings);