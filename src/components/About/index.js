import React from "react";
import "./style.css";

import profPic from "../Assets/professional_pic.jpg";

const About = () => {
    return (
        <div className="container-fluid" id="aboutContainer">
            <div className="row">
                <div className="col-sm-12">
                        <h2 id="aboutHead">FULL STACK WEB DEVELOPER</h2>
                        {/* <h3 class="subtitle" id="element" data-typeit-id="8114449">I write code and build beautifully simple applications.<span class="ti-cursor with-delay" style="display: inline; color: rgb(33, 37, 41); font: 300 28.8px / 34.56px Lato, sans-serif; margin: 0px -6.32031px 0px -2.32031px;">|</span></h3> */}
                </div>
            </div>
            <main className="row">
                <div className="col-sm-12">
                    <img className="img-thumbnail" id="mainImage" src={profPic} alt="Cameron Nix headshot"/>
                    {/* <p>A solutions-driven software developer with a passion for creating beautiful &amp; scalable web applications built on JavaScript.</p> */}
                    <p><a href="https://github.com/cnix273">https://github.com/cnix273</a> &emsp; &emsp; <a href="mailto:camerondeverenix@gmail.com">camerondeverenix@gmail.com</a></p>
                    <br></br>
                    <p>An innovative &amp; solutions-driven software developer with a passion for creating beautiful, responsive &amp; scalable web applications.</p>
                    {/* <p>A life-long learner who finds joy in problem solving.</p> */}
                    <p>An enthusiastic &amp; driven UCLA graduate with a life-long affinity for architecting thoughtful, straightfoward solutions to complex problem.</p>
                    <p>An innate communicator, team player &amp; leader whose inherent empathy fuels a strong desire to connect with, collaborate with &amp; learn from others.</p>
                    {/* <br/>
                    <h5 className="links"><strong>Professional Links</strong></h5>
                    <hr/>
                    <a className="profLinks" href="https://github.com/cnix273">   GitHub</a>
                    <br/>
                    <a className="profLinks" href="https://www.linkedin.com/in/cameron-nix-a74aa1109/">   LinkedIn</a>
                    <br/>
                    <a className="profLinks" href ="assets/Resume.pdf" download>  Resume</a> */}
                </div>
            </main>
        </div>
    );
};

export default About;