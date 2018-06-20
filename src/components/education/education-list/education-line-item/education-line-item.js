import React, { Component } from 'react';
import DegreeList from './degree-list/degree-list';
import moment from 'moment';
import './education-line-item.css';

class EducationLineItem extends Component {
  render() {

    const degrees = this.props.educationData.degreesEarned;

    const formattedStartDate = moment(this.props.educationData.startDate).format('YYYY');
    const formattedEndDate = this.props.educationData.endDate ? moment(this.props.educationData.endDate).format('YYYY') : 'Current';

    return (
        <div className="education-line-item">
            <p>{this.props.educationData.institution}: {formattedStartDate} - {formattedEndDate}</p>
            <DegreeList degrees={degrees}/>
        </div>
    );
  }
}

export default EducationLineItem;
