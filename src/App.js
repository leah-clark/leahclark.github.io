import React, { Component } from 'react';
import logo from './resources/LOGO.png';
import './App.css';
import signup from './resources/signup.png'
import Header from "./home/Header";
import Menu from "./home/Menu";
import Footer from "./home/Footer";
import Poster from "./resources/Screen Shot 2018-06-08 at 22.19.49.png"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
          <hr />
        <Menu/>
        <hr />
        <img src={Poster} alt="poster" style={{height: "500px"}}/>
        <hr />
        <Footer/>
      </div>
    );
  }
}

export default App;
