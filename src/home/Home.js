import React, { Component } from 'react';
import Poster from "../resources/Screen Shot 2018-06-08 at 22.19.49.png"
import './Home.css';
import VideoScreen from "./VideoScreen";
import Responsive from 'react-responsive-decorator';



class Home extends Component {
    state = {
        isMobile: false
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
            <div className="Home">
                {isMobile ?
                    <div/> :
                    <VideoScreen/>
                }
                <img className="poster" src={Poster} alt="poster"/>
            </div>
        );
    }
}

export default Responsive(Home);




