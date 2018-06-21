import React, { Component } from 'react';
import Section from '../section/section';
import EducationList from './education-list/education-list';
import EducationData from './education-data.json';
import './education.css';

class Education extends Component {
  render() {
    return ( 
      <Section sectionName="education" sectionTitle="Education">
        <div className="education">
          <EducationList educationData={EducationData.education}/>
        </div>
      </Section>
    );
  }
}

export default Education;
