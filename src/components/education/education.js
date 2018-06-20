import React, { Component } from 'react';
import SectionHeader from '../section-header/section-header';
import EducationList from './education-list/education-list';
import EducationData from './education-data.json';
import './education.css';

class Education extends Component {
  render() {
    return (
        <div className="education">
            <SectionHeader sectionTitle="Education"/>
            <EducationList educationData={EducationData.education}/>
        </div>
    );
  }
}

export default Education;
