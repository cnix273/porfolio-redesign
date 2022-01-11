import React, { Component, useRef } from "react";
import Typewriter from "react-typewriter-effect";

import "./style.css";
import { Button, Col, Row } from "react-bootstrap";
import { render } from "@testing-library/react";

// import scrollObject from "../About";

// const scrollObject = React.useRef<HTMLInputElement>(null);

// function smoothScrolling (scrollObject) {
//     scrollObject.scrollIntoView({behavior: "smooth"});
// };

export default class Header extends Component {
    
    constructor(props) {
        super(props);
        // this.scrolling = this.smoothScrolling.bind(this);
    }
    
    // scrollObject = React.useRef<HTMLInputElement>(null);

    // smoothScrolling = () => {
    //     props.myref.current.scrollIntoView({behavior: "smooth"});
    // };

    render() {
        return (
            <section className="container-fluid" id="headerContainer">
                {/* <Row id="header-row">
                    <Col id="solidHeader">
                        <p>Hi, I am</p>
                    </Col>
                    <Col id="typedHeader">
                        <Typewriter
                            textStyle={{
                                fontFamily: 'Gilda Display, serif',
                                color: '#002d72',
                                fontWeight: 500,
                                fontSize: '3em',
                            }}
                            startDelay={1500}
                            cursorColor="#002d72"
                            multiText={[
                                'a developer.',
                                'a problem-solver.',
                                'a leader.',
                                'an innovator.',
                                'a collaborator.',
                                'Cameron Nix.'
                            ]}
                            multiTextDelay={1000}
                            typeSpeed={70}
                        />
                    </Col>
                </Row> */}
                <Row id="header-row">
                    <Col className="solidHeader">
                        <Typewriter
                            textStyle={{
                                fontFamily: 'Gilda Display, serif',
                                color: '#002d72',
                                fontWeight: 500,
                                fontSize: '3em',
                            }}
                            style={{display : 'inline-block'}}
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
                                fontSize: '3em',
                            }}
                            style={{display : 'inline-block'}}
                            startDelay={3500}
                            cursorColor="#002d72"
                            text="I'm a problem solver."
                            typeSpeed={70}
                            hideCursorAfterText={true}
                        />
                        <Typewriter
                            textStyle={{
                                fontFamily: 'Gilda Display, serif',
                                color: '#002d72',
                                fontWeight: 500,
                                fontSize: '3em',
                            }}
                            style={{display : 'inline-block'}}
                            startDelay={3810}
                            cursorColor="#002d72"
                            multiText={[
                                'a problem-solver.',
                                'an innovator.',
                                'a leader.',
                                'a team player',
                                'a developer.'
                            ]}
                            multiTextDelay={1000}
                            typeSpeed={70}
                        />
                    </Col>
                </Row>
                <Row id="header-row2">
                    <Col>
                        <Button>
                            Would you like to hear some more...
                        </Button>
                    </Col>
                </Row>
                {/* <Row id="header-row2">
                    <Col className="solidHeader">
                        <Typewriter
                            textStyle={{
                                fontFamily: 'Gilda Display, serif',
                                color: '#002d72',
                                fontWeight: 500,
                                fontSize: '3em',
                            }}
                            startDelay={4000}
                            cursorColor="#002d72"
                            text="I'm"
                            typeSpeed={70}
                            hideCursorAfterText={true}
                        />
                        <Typewriter
                            textStyle={{
                                fontFamily: 'Gilda Display, serif',
                                color: '#002d72',
                                fontWeight: 500,
                                fontSize: '3em',
                            }}
                            startDelay={4500}
                            cursorColor="#002d72"
                            multiText={[
                                'a problem-solver.',
                                'an innovator.',
                                'a leader.',
                                'a team player',
                                'a developer.'
                            ]}
                            multiTextDelay={1000}
                            typeSpeed={70}
                        />
                    </Col>
                    <Col className="typedHeader">
                        <Typewriter
                            textStyle={{
                                fontFamily: 'Gilda Display, serif',
                                color: '#002d72',
                                fontWeight: 500,
                                fontSize: '3em',
                            }}
                            startDelay={4500}
                            cursorColor="#002d72"
                            multiText={[
                                'a problem-solver.',
                                'an innovator.',
                                'a leader.',
                                'a team player',
                                'a developer.'
                            ]}
                            multiTextDelay={1000}
                            typeSpeed={70}
                        />
                    </Col>
                </Row> */}
                
                {/* <Row>
                    <Col id="solidHeader3">
                        <p>Hi, I am</p>
                    </Col>
                    <Col id="typedHeader3">
                        <Typewriter
                            textStyle={{
                                fontFamily: 'Red Hat Display, sans-serif',
                                color: '#002d72',
                                fontWeight: 300,
                                fontSize: '3em',
                            }}
                            startDelay={2000}
                            cursorColor="#002d72"
                            multiText={[
                                'a developer.',
                                'a problem-solver.',
                                'a leader.',
                                'an innovator.',
                                'a collaborator.',
                                'Cameron Nix.'
                            ]}
                            multiTextDelay={1000}
                            typeSpeed={70}
                        />
                    </Col>
                </Row> */}

                {/* <Row>
                    <Col id = "targetrow">
                        <p id="target">Hi, I am Cameron Nix.</p>
                    </Col>
                </Row> */}
            </section>
        );
    }
};

// export default Header;