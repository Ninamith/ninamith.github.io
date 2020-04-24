import React, { Component } from 'react';

class NavBar extends Component {
    render() {
        return (
            <header id="home">
      
            <nav id="nav-wrap">
               <ul id="nav" className="nav">
                  <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                  <li><a className="smoothscroll" href="#about">About</a></li>
                  <li><a className="smoothscroll" href="#resume">Internships</a></li>
                  <li><a className="smoothscroll" href="#portfolio">Projects</a></li>
                  <li><a className="smoothscroll" href="#testimonials">Photography</a></li>
                  <li><a className="smoothscroll" href="#contact">Contact</a></li>
               </ul>
      
            </nav>
      
            <div className="row banner">
               <div className="banner-text">
                  <h1>Sakina Mithani</h1>
                  <span>Third year computer science student at the University of Waterloo</span>
                  <hr />
               </div>
            </div>
      
            <p className="scrolldown">
               <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
            </p>
      
         </header>
          );
        }
      }
      
export default NavBar;



