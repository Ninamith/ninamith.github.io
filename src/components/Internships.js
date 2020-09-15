import React, { Component } from 'react';
import Divider from '@material-ui/core/Divider';

class Internships extends Component {
    render() {
        return (
            <section id="internships">
                <h1>Internships</h1>
                <br />

                <li className="jobTitle">TheZenith – A Fairfax Company • Software Engineer • September 2019 – December 2019</li>
                    <li className="description">Developing new features to improve user experience in a recently implemented web insurance application using Java and TeaVM</li>
                    <li className="description">Building predictive models to auto-fill questions on forms using neural networks, specifically leveraging Neuroph and Deep Netts Platform</li>
                <br/>
                <Divider/>
                <br/>
                <li className="jobTitle">American Express • Software Engineer • January 2019 – April 2019</li>
                    <li className="description">Developed backend system of globalized insurance application using Vert.x framework, and Java</li>
                    <li className="description">Lead developer on application designed to gamify transactions at Amex accepting merchants using Javascript, ReactJS, npm, NodeJS, SMTP,
                                HTML/CSS. Required backend and frontend development, direct communication with client, and analysis of customer transaction data</li>
                    <li className="description">Automated processes for team – portal for clients to complete information to add to database; worked with Java, JSP, JQuery, SQL, and EAP server</li>
                    <li className="description">Market research for Women in Technology team to better understand goals of membership base and create a plan for team’s 2019 agenda.</li>
                <br/>
                <Divider/>
                <br/>
                <li className="jobTitle">InMoment • Software Developer • May 2018 – August 2018</li>
                    <li className="description">Worked on end to end development of APIs in Java, OAuth authentication, utilizing complex database queries to retrieve data, 
                        applying business logic and using different frameworks to write custom unit and integration tests</li>
                    <li className="description">Worked directly with clients to gather requirements, using technologies such as Java, Angular, MYSQL, HTML/CSS, Maven, Springboot, 
                        and Docker to implement, build and deploy custom software applications</li>
                    <li className="description">Obtained professional training in Agile/Scrum processes through AgileDad course</li>


            </section>
        );
    }
}

export default Internships;