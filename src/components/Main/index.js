import React, { Component } from "react";

import Header from "../Header"
import Nav from "../Nav";
import Project from "../Project";
import Contact from "../Contact";
import About from "../About";
import Skills from "../Skills";

import "./style.css";

class Main extends Component {
  render() {
    return (
      <div className="body">
        <Header/>
        <br/>
        <Nav/>
        <About/>
        <Skills/>
        <Project/>
        <Contact/>
      </div>
    );
  }
}

export default Main;