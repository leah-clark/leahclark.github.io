import React, { Component } from 'react';
import Black from "../resources/black_page.jpg"
import "./shows.css"


class Shows extends Component {
    render() {
        return (
            <div className="shows">
                <table className="tableshows">
                    <tr className="over">
                        <td>JULY 06 2018</td>
                        <td>LIVE @ MOZARTS</td>
                        <td>SWANSEA, WALES</td>
                        <td style={{border: "2px solid White"}}>TICKETS</td>
                    </tr>
                    <tr className="over">
                        <td>AUGUST 03 2018</td>
                        <td>LIVE @ CREATRE SOUND</td>
                        <td>SWANSEA, WALES</td>
                        <td style={{border: "2px solid White"}}>TICKETS</td>
                    </tr>
                    <tr className="over" >
                        <td>SEPTEMBER 14 2018</td>
                        <td>LIVE @ MOZARTS</td>
                        <td>SWANSEA, WALES</td>
                        <td style={{border: "2px solid White"}}>TICKETS</td>
                    </tr>
                    <tr className="over" >
                        <td>DECEMBER 28 2018</td>
                        <td>LIVE @ CREATURE SOUND</td>
                        <td>SWANSEA, WALES</td>
                        <td style={{border: "2px solid White"}}>TICKETS</td>
                    </tr>
                    <tr className="over" >
                        <td>JANUARY 23 2019</td>
                        <td>BATTLE OF THE BANDS</td>
                        <td>SWANSEA, WALES</td>
                        <td style={{border: "2px solid White"}}>TICKETS</td>
                    </tr>
                    <tr >
                        <td>APRIL 17 2019</td>
                        <td>"AVENUE" LAUNCH @ BUNKHOUSE</td>
                        <td>SWANSEA, WALES</td>
                        <td style={{border: "2px solid White", backgroundColor: "white"}}><a className="links" href="https://www.gigantic.com/two-til-twelve-tickets/the-bunkhouse/2019-04-17-19-00?utm_source=ents24&utm_medium=affiliate&utm_campaign=ents24" target="_blank"> TICKETS</a></td>
                    </tr>
                </table>
                <p className="pshows">WITH MORE TO BE ANNOUNCED...</p>
            </div>
        );
    }
}

export default Shows;




