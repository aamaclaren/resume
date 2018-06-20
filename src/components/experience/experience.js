import React, { Component } from 'react';
import SectionHeader from '../section-header/section-header';
import ExperienceList from './experience-list/experience-list';
import ExperienceData from './experience-data.json';
import './experience.css';

class Experience extends Component {
  render() {

    return (
        <div className="experience">
          <SectionHeader sectionTitle="Experience"/>
          <ExperienceList experienceData={ExperienceData.experience}/>
        </div>
    );
  }
}

export default Experience;
