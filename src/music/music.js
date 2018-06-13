import React, { Component } from 'react';
import Black from "../resources/black_page.jpg"
import "./music.css"


class Music extends Component {
    render() {
        return (
            <div className="Music">
                <img className="poster" src={Black} alt="poster" />
            </div>
        );
    }
}

export default Music;




