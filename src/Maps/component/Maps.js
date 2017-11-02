import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
// import { Switch, Route, Link } from 'react-router-dom';


class Maps extends Component {
  render() {
    return(
      <div class="Maps">
        { this.props.name }
        {/* <withScriptjs>
          <withGoogleMap> */}
            <GoogleMap  googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places" defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}/>
          {/* </withGoogleMap>
        </withScriptjs> */}
      </div>
    );
  }
}


// https://tomchentw.github.io/react-google-maps/
export default withScriptjs(withGoogleMap(Maps));
// export default Maps;
