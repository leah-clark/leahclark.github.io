import React, { Component } from 'react';
import Drums from "../resources/DRUMS.jpg";
import Tickets from "../resources/TICKETS.jpg"
import Coming from "../resources/comingsoon.png"

import "./Store.css"


class Store extends Component {
    render() {
        return (
            <div className="store">
                <div class="member">
                    <img src={Tickets} class="storepic" alt="Responsive image" />
                    <div class="name">TICKETS</div>
                </div>
                <div class="member">
                    <img  src={Drums} class="storepic" alt="Responsive image" />
                    <div  class="name" style={{marginLeft: "14vw"}}>MUSIC</div>
                </div>
                <div class="member">
                    <img src={Coming} class="storepic" alt="Responsive image" />
                    <div class="name">MERCHANDISE</div>
                </div>
            </div>
        );
    }
}

export default Store;




