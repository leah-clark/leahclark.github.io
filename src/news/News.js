import React, { Component } from 'react';
import Black from "../resources/black_page.jpg"
import "./news.css"
import Iframe from './Iframe'
import Responsive from 'react-responsive-decorator';


class News extends Component {
    state = {
        isMobile: false
    }
    constructor(props) {
        super(props);
        this.state = {
            src: 'https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ftwotiltwelve%2F&tabs=timeline&width=340&height=490&small_header=true&adapt_container_width=true&hide_cover=true&scrolling=no&show_facepile=false&appId=1635510153337893'
        };
    }

    
    componentDidMount() {
        this.props.media({ minWidth: 768 }, () => {
            this.setState({
                isMobile: false
            });
        });
        this.props.media({ maxWidth: 768 }, () => {
            this.setState({
                isMobile: true
            });
        });
    }

    render() {
        const { isMobile } = this.state;
        return (
            <div className="News">
              {isMobile ?
                <Iframe source={this.state.src} />:
                <div/>}
            </div>
        );
    }
}

export default  Responsive(News);




