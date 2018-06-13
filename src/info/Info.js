import React, { Component } from 'react';
import Garage from "../resources/garage.jpg"
import "./info.css"


class Info extends Component {
    render() {
        return (
            <div className="Info">
                <img className="garage" src={Garage}  alt="garage"/>
                <h1 className="h1">WHO ARE WE? </h1>
                <p className="text1"> Two Til Twelve are an five-piece alternative rock ’n’ roll band who play both covers and original music from the beautiful city of Swansea.</p>
                <p className="text2">The band consists of; Joel Clark (lead vocalist), Shorn Swayne (guitarist), Owain Davies (guitarist), Aaron Abraham (drummer) and Nathan Matthews (bass guitarist). </p>
            </div>
        );
    }
}

export default Info;
