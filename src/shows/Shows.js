import React, { Component } from 'react';
import Black from "../resources/black_page.jpg"
import "./shows.css"


class Shows extends Component {
    render() {
        return (
            <div className="shows">
                <table className="tableshows">
                    <tr>
                        <td>JULY 06 2018</td>
                        <td>LIVE @ MOZARTS</td>
                        <td>SWANSEA, WALES</td>
                        <td style={{border: "2px solid White"}}>TICKETS</td>
                    </tr>
                </table>
                <p className="pshows">WITH MORE TO BE ANNOUNCED...</p>
            </div>
        );
    }
}

export default Shows;




