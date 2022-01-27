import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

import "./style.css";
import profPic from "../Assets/professional_pic.jpg";

import { TransitionGroup, CSSTransition } from "react-transition-group";

export default class About extends Component {

    render() {
        const {location } = this.props;

        const timeout = {enter: 800, exit: 400 };

        return (
            <TransitionGroup component="div" className="container-fluid App" id="aboutContainer">
                <CSSTransition timeout={timeout} className="pageSlider" mountOnEnter={false}>
                <Row className="row">
                    <Col xs={6} id="portfolio-picture">
                        <img className="img-thumbnail" id="mainImage" src={profPic} alt="Cameron Nix headshot"/>
                        {/* <p>A solutions-driven software developer with a passion for creating beautiful &amp; scalable web applications built on JavaScript.</p> */}
                    </Col>
                    <Col xs={6} id="about-text">
                        <p>An innovative &amp; solutions-driven software developer with a passion for creating beautiful, responsive &amp; scalable web applications.</p>
                        {/* <p>A life-long learner who finds joy in problem solving.</p> */}
                        <p>An enthusiastic &amp; driven UCLA graduate with a life-long affinity for architecting thoughtful, straightfoward solutions to complex problem.</p>
                        <p>An innate communicator, team player &amp; leader whose inherent empathy fuels a strong desire to connect with, collaborate with &amp; learn from others.</p>
                        <br/>
                        <p><a className="contactlinks" href="https://github.com/cnix273">https://github.com/cnix273</a> &emsp; &emsp; <a className="contactlinks" href="mailto:camerondeverenix@gmail.com">camerondeverenix@gmail.com</a></p>
                    </Col>
                </Row>
                </CSSTransition>
            </TransitionGroup>
        );
    }
};