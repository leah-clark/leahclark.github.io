import React, { Component } from 'react';
import './App.css';
import Header from "./home/Header";
import Menu from "./home/Menu";
import Footer from "./home/Footer";
import Responsive from 'react-responsive-decorator';
import HamburgerMenu from "./home/HamburgerMenu";
import Routing from "./Routing";


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
          <Routing/>
        <Footer/>
      </div>
    );
  }
}

export default Responsive(App);
