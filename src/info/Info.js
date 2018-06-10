import React, { Component } from 'react';
import Garage from "../resources/garage.jpg"
import "./info.css"
import Poster from "../resources/Screen Shot 2018-06-08 at 22.19.49.png"
import Responsive from 'react-responsive-decorator';


class Info extends Component {
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
            <div className="Info">
                {isMobile ?
                    <img src={Poster} alt="poster" style={{height: "500px", visibility:"hidden"}}/> : <br/>
                }
                <img className="garage" src={Garage}  alt="garage"/>
                <h1 className="h1">WHO ARE WE? </h1>
                <p className="text1"> Two Til Twelve are an five-piece alternative rock ’n’ roll band who play both covers and original music from the beautiful city of Swansea.</p>
                <p className="text2">The band consists of; Joel Clark (lead vocalist), Shorn Swayne (guitarist), Owain Davies (guitarist), Aaron Abraham (drummer) and Nathan Matthews (bass guitarist). </p>
            </div>
        );
    }
}

export default Responsive(Info);
