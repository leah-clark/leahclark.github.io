import React, { Component } from 'react';
import Poster from "../resources/Screen Shot 2018-06-08 at 22.19.49.png"


class Home extends Component {
    render() {
        return (
            <div className="Home">
                <img src={Poster} alt="poster" style={{height: "500px"}}/>
            </div>
        );
    }
}

export default Home;




