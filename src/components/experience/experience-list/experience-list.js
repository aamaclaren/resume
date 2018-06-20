import React, { Component } from 'react';
import ExperienceLineItem from './experience-line-item/experience-line-item';
import './experience-list.css';

class ExperienceList extends Component {
  render() {

    const experienceLineItems = this.props.experienceData.map((experienceItem) =>
      <ExperienceLineItem key={experienceItem.id} experienceData={experienceItem}/>
    );

    return (
        <div className="experience-list">
            {experienceLineItems}
        </div>
    );
  }
}

export default ExperienceList;
