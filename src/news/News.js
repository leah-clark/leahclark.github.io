import React, { Component } from 'react';
import Black from "../resources/black_page.jpg"
import "./news.css"


class News extends Component {
    render() {
        return (
            <div className="News">
                <img className="poster" src={Black} alt="poster" />
            </div>
        );
    }
}

export default  News;




