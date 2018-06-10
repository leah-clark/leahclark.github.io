import React, { Component } from 'react';
import './Home.css';

class Menu extends Component {
    render() {
        return (

            <div className="Menu">
                <hr />
                <div class="topnav">
                    <a class="active" href="#home">HOME</a>
                    <a href="#info">INFO</a>
                    <a href="#shows">SHOWS</a>
                    <a href="#music">MUSIC</a>
                    <a href="#info">STORIES</a>
                    <a href="#shows">GALLERY</a>
                    <a href="#music">NEWS</a>
                </div>
            </div>
        );
    }
}


export default Menu;
