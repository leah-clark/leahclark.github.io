import React, { Component } from 'react';
import './Home.css';
import Facebook from '../resources/black-and-white-facebook-icon-transparent_67218.png'
import Twitter from '../resources/Twitter.png'
import Instagram from '../resources/white-instagram-256.png'
import Snapchat from '../resources/snapchat.png'
import Spotify from '../resources/imageedit_10_5728340730.jpg'
import Apple from '../resources/apple.png'


class Footer extends Component {

    render() {
        return (
            <div className="footer">
                    <a href="https://www.facebook.com/x.Leah.Clark">
                        <img border="0" className="icon" alt="Facebook" src={Facebook} ></img></a>
                    <a href="https://twitter.com/Leah_Ann_Clark">
                        <img border="0" className="icon" alt="Twitter" src={Twitter}></img></a>
                    <a href="https://www.linkedin.com/in/leah-clark-97188368/">
                        <img border="0" className="icon" alt="Instagram" src={Instagram} ></img></a>
                    <a href=" mailto:leahclark95@gmail.com">
                        <img border="0" className="icon" alt="Snapchat" src={Snapchat}></img></a>
                    <a href="https://www.linkedin.com/in/leah-clark-97188368/">
                        <img border="0" className="icon" alt="Spotify" src={Spotify} ></img></a>
                    <a href=" mailto:leahclark95@gmail.com">
                        <img border="0" className="icon" alt="Apple" src={Apple}></img></a>
            </div>
        );
    }
}



export default Footer;