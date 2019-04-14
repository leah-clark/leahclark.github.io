import React, { Component } from 'react';
import './Home.css';
import Facebook from '../resources/black-and-white-facebook-icon-transparent_67218.png'
import Twitter from '../resources/Twitter.png'
import Instagram from '../resources/white-instagram-256.png'
import Snapchat from '../resources/snapchat.png'
import Spotify from '../resources/imageedit_10_5728340730.jpg'
import Apple from '../resources/apple.png'
import YouTube from '../resources/youtube.png'



class Footer extends Component {

    render() {
        return (
            <div className="footer">
                <a href="https://www.facebook.com/twotiltwelve/" target="_blank">
                        <img border="0" className="icon" alt="Facebook" src={Facebook} ></img></a>
                    <a href="https://twitter.com/TwoTilTwelve" target="_blank">
                        <img border="0" className="icon" alt="Twitter" src={Twitter}></img></a>
                    <a href="https://www.instagram.com/twotiltwelve/" target="_blank">
                        <img border="0" className="icon" alt="Instagram" src={Instagram} ></img></a>
                    <a href="www.snapchat.com" target="_blank">
                        <img border="0" className="icon" alt="Snapchat" src={Snapchat}></img></a>
                    <a href="https://www.youtube.com/user/ZinniarHD" target="_blank">
                       <img border="0" className="icon" alt="YouTube" src={YouTube}></img></a>
                    <a href="https://open.spotify.com/album/7BC59gmSxV1bSeEmlwqmzU?si=jCE8xnlFRim4xaA3IZVZdg&fbclid=IwAR0tZBMkpLdt-59X_JOlgt8ws00oK0K6F-McdihZWjZZXjR7dAmKqeqBoVY" target="_blank">
                        <img border="0" className="icon" alt="Spotify" src={Spotify} ></img></a>
            </div>
        );
    }
}



export default Footer;