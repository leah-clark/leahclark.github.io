import React, { Component } from 'react';
import Black from "../resources/black_page.jpg"
import "./shows.css"


class Shows extends Component {
    render() {
        return (
            <div className="Shows">
                <img className="poster" src={Black} alt="poster" />
            </div>
        );
    }
}

export default Shows;




