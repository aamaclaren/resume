import React, { Component } from 'react';
import SectionHeader from '../section-header/section-header';
import './summary.css';

class Summary extends Component {
  render() {
    return (
        <div className="summary">
          <SectionHeader sectionTitle="Summary"/>
          <p>Software Engineer with 3+ years of development experience including being a key member in the building of a multiple client web application product from concept to production with an Agile team using the Scum methodology. Proven skills in software design, implementation, unit testing, and documentation. Supportive and enthusiastic team member dedicated to creating quality applications and resolving project issues. Proud to take ownership of application components and features.</p>
        </div>
    );
  }
}

export default Summary;
