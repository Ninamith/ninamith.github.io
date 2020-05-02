import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <section id="about">
                <div className="row">
                    <div className="three columns">
                        <img className="profile-pic" src="me.jpg"/>
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
                            </div>
                            <div className="columns download">
                                {/* <p>
                                    <a href={resumeDownload} className="button"><i className="fa fa-download"></i>Download Resume</a>
                                </p> */}
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        );
    }
}

export default About;