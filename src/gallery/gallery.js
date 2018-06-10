import React, { Component } from 'react';
import Black from "../resources/black_page.jpg"


class Gallery extends Component {
    render() {
        return (
            <div className="Gallery">
                <img src={Black} alt="poster" style={{height: "500px"}}/>
            </div>
        );
    }
}

export default Gallery;




