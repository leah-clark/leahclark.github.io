import React, { Component } from 'react';
import Black from "../resources/black_page.jpg"
import "./music.css"
import SpotifyPlayer from 'react-spotify-player';
 
// size may also be a plain string using the presets 'large' or 'compact'
const size = {
  width: '100%',
  height: 300,
};
const view = 'list'; // or 'coverart'
const theme = 'black'; // or 'white'
 
class Music extends Component {
    render() {
        return (
            <div className="music">
                <SpotifyPlayer
                uri="spotify:album:7BC59gmSxV1bSeEmlwqmzU?si=jCE8xnlFRim4xaA3IZVZdg&fbclid=IwAR0tZBMkpLdt-59X_JOlgt8ws00oK0K6F-McdihZWjZZXjR7dAmKqeqBoVY"
                size={size}
                view={view}
                theme={theme}
                />
            </div>
        );
    }
}

export default  Music;




