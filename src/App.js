import React, { Component } from 'react';
import logo from './resources/LOGO.png';
import './App.css';
import signup from './resources/signup.png'
import Header from "./home/Header";
import Menu from "./home/Menu";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
          <hr />
        <Menu/>
        <hr />
      </div>
    );
  }
}

export default App;
