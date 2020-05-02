import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import About from './components/About';

class App extends Component {

  render() {
    return (
      <div className="App">
        <NavBar/>
        <About/>
      </div>
    );
  }
}

export default App;
