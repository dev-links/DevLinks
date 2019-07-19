import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import firestore from '../../config/Firebase';
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
        jobs: [],
        lat: "",
        lng: ""
      }

    }
    
    

    componentDidMount(){
      let locations = this.state
      Axios.get('https://Dev-Links.firebaseio.com/jobListings/.json?auth=8BAXB62tMF2F9FrgFETKa7AQ3AmE1dfSfaLGwkng')
      .then( data => {
        this.setState({locations: data.data})
      })
      const db = firestore.firestore()
      db.collection("jobListings").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} ${doc.data().location}`);
        });
     });
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

    

    render() {
      let listings = this.state.jobs.map( =>{
        return <div>
          <h3>{location}</h3>
        </div>
      })
      return (
        <div>
          <img alt='Company logo'/>
          
            
         
         </div>
      );
    }
  }

  export default  JobListings
  










       
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  {/* {this.displayMarkers()} */}

  // displayMarkers = () => {
    //   return this.state.locations.map((jobs, index) => {
    //     return <Marker 
    //     key={index} 
    //     id={index} 
    //     position={{
    //      lat: jobs.latitude,
    //      lng: jobs.longitude
    //    }}
    //     />
    //   })
    // }


    // <Map className='map-container'
    //         google={this.props.google}
    //         zoom={15}
    //         style={mapStyles}
    //         initialCenter={{ lat: 32.7777, lng: -96.7955}}
    //         >
    //         <Marker position={{ lat: 32.7777, lng: -96.7955}}  />
    //         <Marker position={{ lat: 32.7808, lng: -96.7975}}  /> 

    //       </Map>

    // GoogleApiWrapper({
    //   apiKey: 'AIzaSyD_EZ0L3z6RTmVbrPG1Z1IZ3zsuZopE-aQ'
    // })(JobListings);