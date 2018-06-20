import React, { Component } from 'react';
import moment from 'moment';
import './experience-line-item.css';

class ExperienceLineItem extends Component {
  render() {

    const formattedStartDate = moment(this.props.experienceData.startDate).format('MMM YYYY');
    const formattedEndDate = this.props.experienceData.endDate ? moment(this.props.experienceData.endDate).format('MMM YYYY') : 'Current';

    return (
        <div className="experience-line-item">
          <div className="experience-line-item-header">
            <div className="company-name">{this.props.experienceData.company}</div>
            <div className="tenure">{formattedStartDate} - {formattedEndDate}</div>
          </div>
          <div className="job-title">{this.props.experienceData.title}</div>
        </div>
    );
  }
}

export default ExperienceLineItem;
