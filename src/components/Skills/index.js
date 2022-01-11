import React from "react";
import "./style.css";

import { IoIosGlobe } from 'react-icons/io';
import { IoCodeSlashOutline } from 'react-icons/io5';
import { FaHtml5 } from 'react-icons/fa';
import { FaCss3Alt } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { FaNodeJs } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

const Skills = () => {
    return (
        <div className="container-fluid" id="skillsContainer">
            <div className="row cards">
            <div className="profile-card" data-speed="2" id="webdev">
                <IoCodeSlashOutline className="icon" size="5em"/>

                    <h5 className="card-title">Web Developer</h5>
                    <p className="card-text">
                        Build dynamic, efficient applications with elegant, sleek &amp; captivating designs.
                    </p>
                    <h5 className="card-title">
                        Languages I speak:
                    </h5>
                    <div className="col">
                            <div className="skill-bar-title">
                                <FaHtml5 size="3em"/>
                                <p>HTML5</p>
                            </div>
                        </div>

                        <div className="col">
                            <div className="skill-bar-title">
                                <FaCss3Alt size="3em"/>
                                <p>CSS3</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="skill-bar-title">
                                <SiJavascript size="3em"/>
                                <p>JavaScript</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="skill-bar-title">
                                <FaReact size="3em"/>
                                <p>React</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="skill-bar-title">
                                <FaNodeJs size="3em"/>
                                <p>NodeJS</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="skill-bar-title">
                                <FaGithub size="3em"/>
                                <p>Git</p>
                            </div>
                        </div>
                    <p className="card-text">
                        JavaScript, React, jQuery, HTML5, CSS3, Handlebars
                    </p>
                    <h5 className="card-title">
                        Dev Tools:
                    </h5>
                    <p className="card-text">
                        HTTP &amp; REST APIs<br></br>
                        Bootstrap<br></br>
                        Material-UI<br></br>
                        Github<br></br>
                        Terminal<br></br>
                        VSCode<br></br>
                    </p>
                </div>
                {/* <div className="profile-card" id="engineer">
                    <IoCodeSlashOutline className="icon" size="5em"/>
                    
                    <h5 className="card-title">Software Engineer</h5>
                    <p className="card-text">
                        Create practical &amp; secure server-side applications that meet all your business and personal needs.
                    </p>
                    <h5 className="card-title">
                        Technologies I use:
                    </h5>
                    <p className="card-text">
                        Node.js, Express.js, MySQL &amp; MongoDB
                    </p
                    ><h5 className="card-title">
                        Dev Tools:
                    </h5>
                    <p className="card-text">
                        Sequelize &amp; Mongoose<br></br>
                        Secure Authentication<br></br>
                        Object Oriented Programming<br></br>
                        Application Design<br></br>
                        Database Architecting<br></br>
                    </p>
                </div> */}
            </div>

            {/* <br></br> */}

            <div className="row">
                <div className="col-md-10 offset-md-1">
                    <div className="row text-center languages">
    
                        <div className="col">
                            <div className="skill-bar-title">
                                <FaHtml5 size="3em"/>
                                <p>HTML5</p>
                            </div>
                        </div>

                        <div className="col">
                            <div className="skill-bar-title">
                                <FaCss3Alt size="3em"/>
                                <p>CSS3</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="skill-bar-title">
                                <SiJavascript size="3em"/>
                                <p>JavaScript</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="skill-bar-title">
                                <FaReact size="3em"/>
                                <p>React</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="skill-bar-title">
                                <FaNodeJs size="3em"/>
                                <p>NodeJS</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="skill-bar-title">
                                <FaGithub size="3em"/>
                                <p>Git</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <br></br> */}
        </div>
    );
};

export default Skills;