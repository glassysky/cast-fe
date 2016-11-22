import React, { Component } from 'react';
import logo from './logo.svg';
import './index.css';

import Nav from '../../components/nav/index'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav></Nav>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to </h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
