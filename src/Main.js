import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Roster from './Roster';

class Main extends Component {
  render() {
    return(
      <div class="Main">
        <Switch>
          {/* <Route exact path="/" component={Home}/> */}
          {/* both /roster and /roster/:number begin with /roster */}
          <Route path="/roster" component={ Roster }/>
          {/* <Route path="/schedule" component={Schedule}/> */}
        </Switch>

        <ul>
          <li><Link to="/roster">Roster</Link></li>
          <li><Link to="/roster/6">A roaster</Link></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>

        <p className="App-intro">
          My main menu.
        </p>
      </div>
    );
  }
}

export default Main;
