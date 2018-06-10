import React, { Component } from 'react';
import Black from "../resources/black_page.jpg"


class News extends Component {
    render() {
        return (
            <div className="News">
                <img src={Black} alt="poster" style={{height: "500px"}}/>
            </div>
        );
    }
}

export default  News;




