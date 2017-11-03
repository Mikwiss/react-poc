import React, { Component } from 'react';
import Maps from './Maps';

class MapsContainer extends Component {
  render(){
    return(
      <div>
        <Maps googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}/>
      </div>
    );
  }
}

export default MapsContainer;
