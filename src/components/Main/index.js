import React, { Component } from "react";

import Header from "../Header"
import Nav from "../Nav";
import Project from "../Project";
import Contact from "../Contact";
import About from "../About";
import Skills from "../Skills";

import "./style.css";

class Search extends Component {
  state = {
    name: [],
    email: [],
    message: []
  };
  
  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: [value]
    })
  }

  // Setting state to search value
  handleFormSubmit = event => {
    event.preventDefault();

  };

  render() {
    return (
      <div className="body">
        <Header/>
        <Nav/>
        <About/>
        <Skills/>
        <Project/>
        <Contact/>
      </div>
    );
  }
}

export default Search;