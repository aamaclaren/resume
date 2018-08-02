import React, { Component } from 'react';
import moment from 'moment';
import shortid from 'shortid';
import './experience-line-item.css';

class ExperienceLineItem extends Component {
  render() {

    const formattedStartDate = moment(this.props.experienceData.startDate).format('MMM YYYY');
    const formattedEndDate = this.props.experienceData.endDate ? moment(this.props.experienceData.endDate).format('MMM YYYY') : 'Current';
    const accomplishmentItems = this.props.experienceData.accomplishments.map((accomplishmentItem) =>
      <li key={shortid.generate()} className="accomplishment-item">{accomplishmentItem}</li>
    );

    return (
        <div className="experience-line-item">
          <div className="experience-line-item-header">
            <div className="company-name">{this.props.experienceData.company}</div>
            <div className="tenure">{formattedStartDate} - {formattedEndDate}</div>
          </div>
          <div className="job-title">{this.props.experienceData.title}</div>
          <ul className="accomplishments-list">
            {accomplishmentItems}
          </ul>
        </div>
    );
  }
}

export default ExperienceLineItem;
