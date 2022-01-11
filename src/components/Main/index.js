import React, { Component } from "react";

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

  // submitContact = contactInfor => {
  //   axios.post("/apis/contact/new", {
  //     username: userData.username,
  //     email: userData.email,
  //     password: userData.password
  //   }).then(function (data) {
  //     console.log("data stuff", data.data);
  //     if (data.duplicateUser) {
  //       // Replace with Modal
  //       alert("Sorry, that username has been taken");
  //     } else if (data.data.success) {
  //       console.log("yay!")
  //       this.props.authenticate();
  //       this.setState({
  //         redirectToReferrer: true
  //       });
  //     }
  //   }.bind(this)).catch(function (err) {
  //     console.log(err);
  //   });
  // }

  // Setting state to search value
  handleFormSubmit = event => {
    event.preventDefault();

  };

  render() {
    return (
      <div className="body">
        <Nav/>
        <About/>
        <Skills/>
        <Project/>
        <Contact
          name={this.state.name}
          email={this.state.email}
          message={this.state.message}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
      </div>
    );
  }
}

export default Search;
 