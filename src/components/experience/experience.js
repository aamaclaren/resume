import React, { Component } from 'react';
import Section from '../section/section';
import ExperienceList from './experience-list/experience-list';
import ExperienceData from './experience-data.json';
import './experience.css';

class Experience extends Component {
  render() {

    return (
      <Section sectionName="experience" sectionTitle="Experience">
        <div className="experience">  
          <ExperienceList experienceData={ExperienceData.experience}/>
        </div>
      </Section>
    );
  }
}

export default Experience;
