import React from "react";
import "./style.css";

import Navbar from 'react-bootstrap/Navbar'
import Nav from "react-bootstrap/Nav";
import { Link } from 'react-scroll'

const NavBar = () => {
    return (
        <Navbar id="navbar" expand="lg" sticky="top">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="m-auto">
                    <Link className="links" activeClass="active" to="aboutContainer" spy={true} smooth={true}>WHO</Link>
                    <Link className="links" activeClass="active" to="pre-skills" spy={true} smooth={true}>WHAT</Link>
                    <Link className="links" activeClass="active" to="pre-projects" spy={true} smooth={true}>WORKS</Link>
                    <Link className="links" activeClass="active" to="contactContainer" spy={true} smooth={true}>CONTACT</Link>
                    {/* <Link activeClass="active" to="aboutContainer" spy={true} smooth={true} */}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
};

export default NavBar;