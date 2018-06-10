import React, { Component } from 'react';
import Burger from '../resources/hamburger.png'
import './overlay.css';
import './Home.css';
import { Link } from 'react-router-dom'



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
                            <li><Link  to='/'>HOME</Link></li>
                            <li><Link to='/info'>INFO</Link></li>
                            <li><Link to='/shows'>SHOWS</Link></li>
                            <li><Link to='/music'>MUSIC</Link></li>
                            <li><Link to='/stories'>STORIES</Link></li>
                            <li><Link to='/gallery'>GALLERY</Link></li>
                            <li><Link to='/news'>NEWS</Link></li>
                        </ul>
                    </nav>
                </div>

            </div>
        );
    }


}



export default HamburgerMenu;