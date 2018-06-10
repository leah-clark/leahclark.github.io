import React, { Component } from 'react';
import Black from "../resources/black_page.jpg"


class Music extends Component {
    render() {
        return (
            <div className="Music">
                <img src={Black} alt="poster" style={{height: "500px"}}/>
            </div>
        );
    }
}

export default Music;




