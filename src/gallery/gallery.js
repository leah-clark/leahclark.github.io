import React, { Component } from 'react';
import Black from "../resources/black_page.jpg"
import './gallery.css'

class Gallery extends Component {
    render() {
        return (
            <div className="Gallery">
                <img className="poster" src={Black} alt="poster"/>
            </div>
        );
    }
}

export default Gallery;




