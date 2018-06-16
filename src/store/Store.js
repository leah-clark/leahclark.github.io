import React, { Component } from 'react';
import Black from "../resources/black_page.jpg";
import './Store.css'


class Store extends Component {
    render() {
        return (
            <div className="store">
                <img className="poster" src={Black} alt="poster"/>
            </div>
        );
    }
}

export default Store;




