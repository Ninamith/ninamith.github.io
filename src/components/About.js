import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import GitHubIcon from '@material-ui/icons/GitHub';
import Link from '@material-ui/core/Link';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

class About extends Component {
    render() {
        return (
            <section id="about">
                <div className="row">
                    <div className="three columns">
                        <Avatar alt="Remy Sharp" src="me.jpg" className="profile-pic"/>

                    </div>
                    <div className="nine columns main-col">
                        <h2>About Me</h2>

                        <p>As a third year computer science student at the University of Waterloo, I have both in-class 
                            internship experience working at software companies. Take a look at my "internship" page to see
                            where I have worked, or "projects" to see things I have worked on in class and on my own, or check
                            out my *very* amateur photography!
                        </p>
                        <div className="row">
                            <div className="columns contact-details">
                                <h2>Contact Details</h2>
                                <p className="address">
                                    <span>Sakina Mithani</span><br />
                                    <span>Canada
                                    </span><br />
                                    <span>sakina.mithani@uwaterloo.ca</span>
                                </p>
                                <Link href="https://github.com/ninamith">
                                <GitHubIcon style={{ fontSize: 40 }} id="githubIcon"/>
                            </Link>
                            <Link href="https://www.linkedin.com/in/sakinamithani/">
                                <LinkedInIcon style={{ fontSize: 45, marginTop: 5 }}/>
                            </Link>
                            </div>
                        
                            {/* <div className="columns download">
                            <Link href="https://github.com/ninamith">
                                <GitHubIcon fontSize="large"/>
                            </Link>
                            <br/>
                            <Link href="https://www.linkedin.com/in/sakinamithani/">
                                <LinkedInIcon fontSize="large"/>
                            </Link>
                            </div> */}
                        </div>
                    </div>
                </div>

            </section>
        );
    }
}

export default About;