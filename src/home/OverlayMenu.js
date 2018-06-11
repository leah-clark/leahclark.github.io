import React, { Component } from 'react';
import OverlayMenu from 'react-overlay-menu';

class Example extends Component {
    constructor(props) {
        super(props);
        this.state = { isOpen: false };
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        return (
            <div>
                <button type="button" onClick={this.toggleMenu}>Open menu</button>
                <OverlayMenu
                    open={this.state.isOpen}
                    onClose={this.toggleMenu}
                >
                    <Router>
                        <List>
                            <ListItem>
                                <Link onClick={() => {this.setState({ visible: !this.state.visible, blackOverlay: true }) }} to={"/"}>
                                    Login
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link onClick={this.forceUpdate} to={"/info"}>
                                    Info
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link onClick={this.forceUpdate} to={"/shows"}>
                                    Shows
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link onClick={this.forceUpdate} to={"/stories"}>
                                    STORIES
                                </Link>
                            </ListItem>
                        </List>
                    </Router>
                </OverlayMenu>
            </div>
        );
    }
}

export default Example;
 