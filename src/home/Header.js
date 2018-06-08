import React, { Component } from 'react';
import logo from '../resources/LOGO.png';
import './Home.css';
import signup from '../resources/signup.png'

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <header className="App-header">
                    <img src={logo} alt="twotiltwelve" className="left"/>
                    <img src={signup} alt="twotiltwelve" className="right"/>
                    <h1 className="App-title" >TWO TIL TWELVE</h1>
                </header>
            </div>
        );
    }
}

export default Header;
