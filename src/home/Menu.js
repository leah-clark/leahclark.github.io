import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Home.css';

class Menu extends Component {
    render() {
        return (

            <div className="Menu">
                <div className="topnav">
                    <Link to='/'>HOME</Link>
                    <Link to='/info'>INFO</Link>
                    <Link to='/shows'>SHOWS</Link>
                    <Link to='/music'>MUSIC</Link>
                    <Link to='/store'>STORE</Link>
                    <Link to='/gallery'>GALLERY</Link>
                    <Link to='/news'>NEWS</Link>
                </div>
            </div>
        );
    }
}


export default Menu;
