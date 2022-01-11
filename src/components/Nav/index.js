import React from "react";
import "./style.css";

import Navbar from 'react-bootstrap/Navbar'
import Nav from "react-bootstrap/Nav";

const NavBar = () => {
    return (
        <Navbar id="navbar" expand="lg" sticky="top">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="m-auto">
                    <Nav.Link className="links" href="#aboutContainer">WHO</Nav.Link>
                    <Nav.Link className="links" href="#skillsContainer">WHAT</Nav.Link>
                    <Nav.Link className="links" href="#projectContainer">WORKS</Nav.Link>
                    <Nav.Link className="links" href="#contactContainer">CONTACT</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
};

export default NavBar;