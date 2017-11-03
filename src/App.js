import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import MapsContainer from "./Maps";

class App extends Component {
  render() {
    return (
      <div class="App">
        <Header></Header>

        <Switch>
          {/* <Route exact path="/" component={Home}/> */}
          {/* both /roster and /roster/:number begin with /roster */}
          <Route path="/maps" component={ MapsContainer }/>
          {/* <Route path="/schedule" component={Schedule}/> */}
        </Switch>

      </div>
    );
  }
}

export default App;
