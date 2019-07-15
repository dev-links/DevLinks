import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import PlacesAutocomplete, {geocodeByAddress, getLatLng} from 'react-places-autocomplete';



const mapStyles = {
    width: '25%',
    height: '25%',
  };
 
 class JobListings extends Component {
    constructor(props) {
      super(props);
      this.state = {
          location: ''
      }
    }
    
    handleChange = location => {
        this.setState({ location });
      };
      
    displayMarkers = () => {
      return this.state.stores.map((store, index) => {
        return <Marker key={index} id={index} position={{
         lat: store.latitude,
         lng: store.longitude
       }}
       onClick={() => console.log('it works')} />
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
          <Map
            google={this.props.google}
            zoom={8}
            style={mapStyles}
            initialCenter={{ lat: 32.777735199999995, lng: -96.79551099999999}}
            >
            {this.displayMarkers()}
          </Map>
            </div>
      );
    }
  }

  export default  GoogleApiWrapper({
    apiKey: 'AIzaSyD_EZ0L3z6RTmVbrPG1Z1IZ3zsuZopE-aQ'
  })(JobListings);