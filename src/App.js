import React, { Component } from 'react';
import logo from './resources/LOGO.png';
import './App.css';
import signup from './resources/signup.png'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <img src={logo} alt="twotiltwelve" className="left"/>
            <img src={signup} alt="twotiltwelve" className="right"/>
            <h1 className="App-title" >TWO TIL TWELVE</h1>
        </header>
      </div>
    );
  }
}

export default App;
