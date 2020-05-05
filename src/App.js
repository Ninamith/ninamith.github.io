import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import About from './components/About';
import Internships from './components/Internships';
import Skills from './components/Skills';
import Projects from './components/Projects';

class App extends Component {

  render() {
    return (
      <div className="App">
        <NavBar/>
        <About/>
        <Internships/>
        <Skills/>
        <Projects />
      </div>
    );
  }
}

export default App;
