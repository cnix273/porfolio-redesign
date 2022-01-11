import React from "react";
import "./style.css";

import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { IoDocumentTextOutline } from 'react-icons/io5';

import Resume from "../Assets/Resume_updated.pdf";

const Project = (props) => {
    return (
        <div className="container-fluid" id ="contactContainer">
            <header className="row">
                <div className="col-sm-12">
                    <h2 id="contactHead">CONTACT</h2>
                </div>
            </header>

            <div className="row contactContent">
                <div className="col-sm-12">
                    <h5>I'm always open to new projects to collaborate on, so if you're in need of a full-stack JavaScript developer, please get in touch!</h5>
                    <div id="icons">
                        <a href={ Resume } download><IoDocumentTextOutline size="5em" className="contactIcon"/></a>
                        <a href="https://github.com/cnix273"><FaGithub size="5em" className="contactIcon"/></a>
                        <a href="https://www.linkedin.com/in/cameronnix/"><FaLinkedin size="5em" className="contactIcon"/></a>
                        <a href="mailto:camerondeverenix@gmail.com"><FiMail size="5em" className="contactIcon"/></a> 
                    </div>
                </div>
            </div>
{/* 
            <div className="row">
                <div className="contactMain col-sm-12">
                    <form className="form-group">
                        <label for="inputName">NAME</label>
                        <input
                            onChange={props.handleInputChange}
                            value={props.name}
                            name="name"
                            type="text"
                            className="form-control rounded-0"
                            id="inputName"
                            placeholder="Name">
                        </input>
                    </form>
                    <form className="form-group">
                        <label for="inputEmail">EMAIL</label>
                        <input
                            onChange={props.handleInputChange}
                            value={props.email}
                            name="email"
                            type="email"
                            className="form-control rounded-0"
                            id="inputEmail"
                            placeholder="Email">
                        </input>
                    </form>
                    <form className="form-group">
                        <label for="inputMessage">MESSAGE</label>
                        <textarea
                            onChange={props.handleInputChange}
                            value={props.messsage}
                            name="message"
                            className="form-control rounded-0"
                            id="inputMessage"
                            rows="3"
                            placeholder="Message">
                        </textarea>
                    </form>
                    <button
                        onClick={props.handleFormSubmit}
                        id="submit-button"
                        type="submit"
                        className="btn rounded-0"
                        data-toggle="modal"
                        data-target="#submissionModal"
                    >Submit</button>
                </div>
            </div> */}
        </div>
    );
};

export default Project;