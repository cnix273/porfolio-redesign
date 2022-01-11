import React from "react";
import "./style.css";

import Navbar from 'react-bootstrap/Navbar'
import Nav from "react-bootstrap/Nav";

const NavBar = () => {
    return (
        <Navbar id="navbar" expand="lg" sticky="top">
            <Navbar.Brand id="navHeading" href="/"><h1>CAMERON NIX</h1></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link className="links" href="#aboutContainer">WHO</Nav.Link>
                    <Nav.Link className="links" href="#skillsContainer">WHAT</Nav.Link>
                    <Nav.Link className="links" href="#projectContainer">WORKS</Nav.Link>
                    <Nav.Link className="links" href="#contactContainer">CONTACT</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
        {/* <nav className="navbar navbar-expand-lg navbar-light" id="sticky">
            
            <div className="navbar-brand">
                <h1>CAMERON NIX</h1>
            </div>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
                
            <nav class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="nav navbar-nav ml-auto">
                    <li><Link to={About}>React</Link></li>
                    <li class="nav-item">
                        <a class="nav-link text-dark" href={About}>WHO</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href={Skills}>WHAT</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href={Project}>WORKS</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href={Contact}>CONTACT</a>
                    </li>
                </ul>
            </nav>
        </nav> */}
};

export default NavBar;