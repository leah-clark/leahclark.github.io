import React, { Component } from 'react';
import './Home.css';
import Band from '../resources/WhatsApp Video 2018-06-19 at 13.29.00.mp4'


class VideoScreen extends Component {

    render() {
        return (
            <div>
                <video className="fullscreen" autoPlay muted loop id="myVideo">
                    <source src={Band} type="video/mp4"></source>
                </video>
            </div>
        );
    }
}



export default VideoScreen;