import React, { Component } from 'react';
import logo from './../../logo.svg';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <p><Link to="/roster/6">Acc</Link> - <Link to="/Maps">Maps</Link></p>
        </header>
    );
  }
}

export default Header;
