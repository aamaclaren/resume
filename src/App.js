import React, { Component } from 'react';
import ContactInfo from './components/contact-info/contact-info';
import Summary from './components/summary/summary';
import Skills from './components/skills/skills';
import Experience from './components/experience/experience';
import Education from './components/education/education';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ContactInfo/>
        <Summary/>
        <Skills/>
        <Experience/>
        <Education/>
      </div>
    );
  }
}

export default App;
