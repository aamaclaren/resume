import React, { Component } from 'react';
import Section from '../section/section';
import InstitutionList from './institution-list/institution-list';
import EducationData from './education-data.json';
import './education.css';

class Education extends Component {
  render() {
    return ( 
      <Section sectionName="education" sectionTitle="Education">
        <div className="education">
          <InstitutionList educationData={EducationData.institutions}/>
        </div>
      </Section>
    );
  }
}

export default Education;
