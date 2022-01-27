import React, { Component } from "react";
import Typewriter from "react-typewriter-effect";

import "./style.css";
import { Button, Col, Row } from "react-bootstrap";
import { Link } from 'react-scroll'

// import scrollObject from "../About";

// const scrollObject = React.useRef<HTMLInputElement>(null);

// function smoothScrolling (scrollObject) {
//     scrollObject.scrollIntoView({behavior: "smooth"});
// };

export default class Header extends Component {
    
    // constructor(props) {
    //     super(props);
    //     this.scrolling = this.smoothScrolling.bind(this);
    // }
    
    // scrollObject = React.useRef<HTMLInputElement>(null);

    // smoothScrolling = () => {
    //     props.myref.current.scrollIntoView({behavior: "smooth"});
    // };

    render() {
        return (
            <section className="container-fluid" id="headerContainer">
                <Row id="header-row">
                    <Col>
                        <div id="type">
                            <Typewriter
                                textStyle={{
                                    fontFamily: 'Gilda Display, serif',
                                    color: '#002d72',
                                    fontWeight: 500,
                                    fontSize: '5em',
                                }}
                                startDelay={1000}
                                cursorColor="#002d72"
                                text="Hi, I'm Cameron Nix."
                                typeSpeed={70}
                                hideCursorAfterText={true}
                            />
                            <Typewriter
                                textStyle={{
                                    fontFamily: 'Gilda Display, serif',
                                    color: '#002d72',
                                    fontWeight: 500,
                                    fontSize: '5em',
                                }}
                                id = "mulit"
                                // style={{display : 'inline-block'}}
                                startDelay={3500}
                                cursorColor="#002d72"
                                multiText={[
                                    'I am a developer.',
                                    'I am a designer.',
                                    'I am a problem solver.',
                                    'I am an innovator.',
                                    'I bring your vision to life.'
                                ]}
                                multiTextDelay={1000}
                                typeSpeed={70}
                                hideCursorAfterText={true}
                            />
                        </div>
                        <Button id="scroll">
                            <Link activeClass="active" to="aboutContainer" spy={true} smooth={true}>Read on...</Link>
                        </Button>
                    </Col>
                </Row>
            </section>
        );
    }
};

// export default Header;