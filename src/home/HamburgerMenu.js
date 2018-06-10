import React, { Component } from 'react';
import Burger from '../resources/hamburger.png'
import './overlay.css';



class HamburgerMenu extends Component {

    render() {
        return (
            <div className="menu">
                <input type="checkbox" id="op"></input>
                <div class="lower">
                    <label for="op"><img className="burger" src={Burger}></img></label>
                </div>
                <div class="overlay overlay-hugeinc">
                    <label for="op"></label>
                    <nav>
                        <ul>
                            <li><a href="#">HOME</a></li>
                            <li><a href="#">INFO</a></li>
                            <li><a href="#">SHOWS</a></li>
                            <li><a href="#">MUSIC</a></li>
                            <li><a href="#">STORIES</a></li>
                            <li><a href="#">GALLERY</a></li>
                            <li><a href="#">NEWS</a></li>
                        </ul>
                    </nav>
                </div>

            </div>
        );
    }


}



export default HamburgerMenu;