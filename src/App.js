import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Maps from "./Maps";

class App extends Component {
  render() {
    return (
      <div class="App">
        <Header></Header>
        <Maps googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `400px` }} />}
              mapElement={<div style={{ height: `100%` }} />}/>
        
      </div>
    );
  }
}

export default App;
