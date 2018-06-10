import React, { Component } from 'react';
import logo from '../resources/LOGO.png';
import './Home.css';
import signup from '../resources/signup.png'

class HeaderMobile extends Component {
    render() {
        return (
            <div className="HeaderMobile">
                <header className="App-header-mobile">
                    <img src={logo} alt="twotiltwelve"/>
                    <h1 className="App-title" >TWO TIL TWELVE</h1>
                </header>
            </div>
        );
    }
}

export default HeaderMobile;
