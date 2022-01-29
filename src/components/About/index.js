import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

import "./style.css";
import profPic from "../Assets/professional_pic.jpg";

export default class About extends Component {
    render() {
        return (
            <section className="container-fluid" id="aboutContainer">
                <p id="about-header">ABOUT</p>
                <Row className="row">
                    <Col xs={6} className="midline-border">
                        <img className="img-thumbnail" id="mainImage" src={profPic} alt="Cameron Nix headshot"/>
                        {/* <p>A solutions-driven software developer with a passion for creating beautiful &amp; scalable web applications built on JavaScript.</p> */}
                    </Col>
                    <Col xs={6} id="about-text">
                        <p>I am a bi-continental developer </p>
                        <p>I am a creative designer and developer, who aims to work with small businesses and marginalized communities to bring their passions to life. I offer both design and development services of web applications or websites!</p>
                        {/* <p>An innovative &amp; solutions-driven software developer with a passion for creating beautiful, responsive &amp; scalable web applications.</p>
                        {/* <p>A life-long learner who finds joy in problem solving.</p> */}
                        {/* <p>An enthusiastic &amp; driven UCLA graduate with a life-long affinity for architecting thoughtful, straightfoward solutions to complex problem.</p>
                        <p>An innate communicator, team player &amp; leader whose inherent empathy fuels a strong desire to connect with, collaborate with &amp; learn from others.</p>
                        <br/> */}
                        <p><a className="contactlinks" href="https://github.com/cnix273">https://github.com/cnix273</a> &emsp; &emsp; <a className="contactlinks" href="mailto:camerondeverenix@gmail.com">camerondeverenix@gmail.com</a></p>
                    </Col>
                </Row>
                <Row id="pre-skills">
                    <Col className="midline-border"/>
                    <Col/>
                </Row>
            </section>
        );
    }
};