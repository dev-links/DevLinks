import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import firestore from '../../config/Firebase';
import '../JobListings/JobListings.css'
import GoogleMapReact from 'google-map-react'
import NavBar from '../NavBar/NavBar'
import Axios from 'axios';
import avatar from '../../assets/avatar.jpg'
import { Link } from 'react-router-dom'
import { Button, UncontrolledCollapse } from 'reactstrap'



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
      let { jobs } = this.state
      // Axios.get('https://Dev-Links.firebaseio.com/jobListings/.json?auth=8BAXB62tMF2F9FrgFETKa7AQ3AmE1dfSfaLGwkng')
      // .then( data => {
      //   this.setState({locations: data.data})
      // })
      const db = firestore.firestore()
      db.collection("jobListings").get().then((querySnapshot) => {
        let updateJobs = []
        querySnapshot.forEach((doc) => {
          updateJobs.push(doc.data())
        this.setState({ jobs: updateJobs})
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
<<<<<<< HEAD
=======

>>>>>>> master
      console.log(this.state.jobs)
      let listings = this.state.jobs.map((job,index) =>{
        return (
        <div key={job.id} className='listings-container'>
          <div className='listings-info'>
            <div>
              <img src={avatar} alt="#"/>
            </div>
            <div>
              <h2>{job.JobTitle}</h2>
              <h4>{job.Company}</h4>
              <p>{job.City} {job.State}</p>
            </div>
            <div>
              <Link to='/chat'>
              <Button >Chat</Button>
              </Link>
            </div>
          </div>
          <div className='more-info'>
          <Button color="success" id={`toggler${index}`} key={job.id} style={{ marginBottom: '1rem', marginRight:'1rem', marginTop:'1rem' }}>
            More Info
          </Button>

          <UncontrolledCollapse toggler={`#toggler${index}`}>

          <div className='section-one mx-3'>
            <h5>{job.Company}</h5>
            <h5>|</h5>
            <h5>{job.Address} {job.City} {job.State}</h5>
            <h5>|</h5>
            <h5>{job.EmploymentTypeMenu}</h5>
          </div>
          <div className='section-two px-3'>
            {job.JobDescription}
          </div>
          <div className='section-three mb-3'>
            <h5>{job.SeniorityLevelMenu}</h5>
            <h5>|</h5>
            <h5>{job.JobTitle}</h5>
            <h5>|</h5>
            <h5>H1b visa: No</h5>
          </div>

          </UncontrolledCollapse>
          </div>
        </div>
        )
      })
<<<<<<< HEAD
=======

>>>>>>> master
      return (
        <div>
          <NavBar />
          {listings}
          
          
         
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