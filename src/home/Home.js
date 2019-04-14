import React, { Component } from 'react';
import Poster from "../resources/debut.jpg"
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
                    <VideoScreen/>:
                    <VideoScreen/>
                }
                <img className="poster" src={Poster} alt="poster"/>
            </div>
        );
    }
}

export default Responsive(Home);




