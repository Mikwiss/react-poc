import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import FullRoster from './FullRoster';
import Player from './Player';

class Roster extends Component {
  render() {
    return(
      <div class="Roster">
        <Switch>
          <Route exact path="/roster" component={ FullRoster }/>
          <Route path="/roster/:number" component={ Player }/>
        </Switch>
      </div>
    );
  }
}

export default Roster;
