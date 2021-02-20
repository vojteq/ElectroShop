import React, {Component} from "react";
import {
    Button,
    Collapse, Form, FormGroup, Input,
    Jumbotron, Label,
    Modal, ModalBody,
    ModalHeader,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    NavItem
} from "reactstrap";
import {NavLink} from "react-router-dom";

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false,
            isModalOpen: false
        }
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleLogin(event) {
        this.toggleModal();
        alert("Username: " + this.userName.value
            + " Password: " + this.password.value
            + " Remember: " + this.remember.checked);
        event.preventDefault();
    }

    render() {
        return (
            <>
                <Navbar dark expand="md">
                    <div className="container navbar-fixed-top">
                        <NavbarToggler onClick={this.toggleNav}/>
                        <NavbarBrand className="mr-auto" href="/">
                            <img src="assets/images/logo.png" height="48" width="98" alt="ElectroShop"/>
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <span className="fa fa-home fa-lg"/> Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/products">
                                        <span className="fa fa-list fa-lg"/> Products
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/aboutus">
                                        <span className="fa fa-info fa-lg"/> About Us
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contactus">
                                        <span className="fa fa-address-card fa-lg"/> Contact Us
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <Button className="btn-bitbucket" outline onClick={this.toggleModal}>
                                        <span className="fa fa-sign-in fa-lg"/> Login
                                    </Button>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>

                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>
                                    ElectroShop
                                </h1>
                                <p>
                                    Newest shop at the market
                                </p>
                            </div>
                            <div className="col-12 col-sm-6">
                                <img src="assets/images/logo.png"/>
                            </div>
                        </div>
                    </div>
                </Jumbotron>

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>
                        Login
                    </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="userName">
                                    User Name
                                </Label>
                                <Input
                                    type="text"
                                    id="userName"
                                    name="userName"
                                    innerRef={(input) => this.userName = input}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">
                                    Password
                                </Label>
                                <Input
                                    type="password"
                                    id="password"
                                    name="password"
                                    innerRef={(input) => this.password = input}
                                />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input
                                        type="checkbox"
                                        name="remember"
                                        innerRef={(input) => this.remember = input}
                                    />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">
                                Login
                            </Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </>
        );
    }
}

export default Header;