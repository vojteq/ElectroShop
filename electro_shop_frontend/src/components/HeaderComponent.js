import React from 'react';
import {Jumbotron, Navbar, NavbarBrand, NavbarToggler} from "reactstrap";
import {Component} from 'react';

class Header extends Component {

    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false;
        };
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }

    render () {
            return (
                <div>
                    <Navbar dark expand="md">
                        <div className="container">
                            <NavbarToggler onClick={this.toggleNav()} />
                            {/*<NavbarBrand className="mr-auto" href = */}
                        </div>
                    </Navbar>


                    <React.Fragment>
                        <Navbar dark>
                            <div className="container">
                                <NavbarBrand href="/">ElectroShop</NavbarBrand>
                            </div>
                        </Navbar>
                        <Jumbotron>
                            <div className="container">
                                <div className="row row-header">
                                    <div className="col-12 col-sm-6">
                                        <h1>ElectroShop</h1>
                                        <p>Newest shop at the market</p>
                                    </div>
                                </div>
                            </div>
                        </Jumbotron>
                    </React.Fragment>
                </div>
        );
    }
}

export default Header;