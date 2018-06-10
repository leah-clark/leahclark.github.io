import React, { Component } from 'react';
import logo from './resources/LOGO.png';
import './App.css';
import signup from './resources/signup.png'
import Header from "./home/Header";
import Menu from "./home/Menu";
import Footer from "./home/Footer";
import Poster from "./resources/Screen Shot 2018-06-08 at 22.19.49.png"
import Responsive from 'react-responsive-decorator';
import HeaderMobile from "./home/HeaderMobile";
import HamburgerMenu from "./home/HamburgerMenu";


class App extends Component {
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
      <div className="App">
          <Header/>
          {isMobile ?
              <HamburgerMenu/> :
              <Menu/>
          }
          <br/>
          <hr />
          <img src={Poster} alt="poster" style={{height: "500px"}}/>
        <Footer/>
      </div>
    );
  }
}

export default Responsive(App);
