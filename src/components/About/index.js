import React, { Component } from "react";

import "./style.css";
import profPic from "../Assets/professional_pic.jpg";

export default class About extends Component {
    
    constructor(props) {
        super(props);
        // this.myRef = React.createRef();
    }

    render() {
        return (
            <section className="container-fluid" id="aboutContainer">
                <main className="row">
                    <div className="col-sm-12">
                        <img className="img-thumbnail" id="mainImage" src={profPic} alt="Cameron Nix headshot"/>
                        {/* <p>A solutions-driven software developer with a passion for creating beautiful &amp; scalable web applications built on JavaScript.</p> */}
                        <p><a className="contactlinks" href="https://github.com/cnix273">https://github.com/cnix273</a> &emsp; &emsp; <a className="contactlinks" href="mailto:camerondeverenix@gmail.com">camerondeverenix@gmail.com</a></p>
                        <br></br>
                        <p>An innovative &amp; solutions-driven software developer with a passion for creating beautiful, responsive &amp; scalable web applications.</p>
                        {/* <p>A life-long learner who finds joy in problem solving.</p> */}
                        <p>An enthusiastic &amp; driven UCLA graduate with a life-long affinity for architecting thoughtful, straightfoward solutions to complex problem.</p>
                        <p>An innate communicator, team player &amp; leader whose inherent empathy fuels a strong desire to connect with, collaborate with &amp; learn from others.</p>
                    </div>
                </main>
            </section>
        );
    }
};