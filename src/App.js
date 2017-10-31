import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import Main from "./Main.js";

class App extends Component {
  render() {
    return (
      <div class="App">
        <Header></Header>
        <Main></Main>
      </div>
    );
  }
}

export default App;
