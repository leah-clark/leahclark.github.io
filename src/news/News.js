import React, { Component } from 'react';
import Black from "../resources/black_page.jpg"
import "./news.css"
import Iframe from './Iframe'


class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            src: 'https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ftwotiltwelve%2F&tabs=timeline&width=340&height=490&small_header=true&adapt_container_width=true&hide_cover=true&scrolling=no&show_facepile=false&appId=1635510153337893'
        };
    }

    render() {
        return (
            <div className="News">
                <Iframe source={this.state.src} />
            </div>
        );
    }
}

export default  News;




