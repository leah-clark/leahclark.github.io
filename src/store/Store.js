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
                    <a href="https://www.gigantic.com/two-til-twelve-tickets/the-bunkhouse/2019-04-17-19-00?utm_source=ents24&utm_medium=affiliate&utm_campaign=ents24" target="_blank">
                    <img  src={Tickets} class="storepic" alt="Responsive image" /></a>
                    <div class="name" >TICKETS</div>
                </div>
                <div class="member">
                <a href="https://open.spotify.com/album/7BC59gmSxV1bSeEmlwqmzU?si=jCE8xnlFRim4xaA3IZVZdg&fbclid=IwAR0tZBMkpLdt-59X_JOlgt8ws00oK0K6F-McdihZWjZZXjR7dAmKqeqBoVY" target="_blank">
                    <img  src={Drums} class="storepic" alt="Responsive image" /></a>
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




