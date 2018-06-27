import React, { Component } from 'react';
import moment from 'moment';
import './institution-line-item.css';

class InstitutionLineItem extends Component {
  render() {

    const degreeItems = this.props.institutionData.degrees.map((degree) =>
      <li className="degree-list-item">{degree.type} in {degree.field} - {moment(degree.completionDate).format('YYYY')}</li>
    );

    const minorItems = this.props.institutionData.minors.map((minor) =>
      <li className="minor-list-item">Minor in {minor.field} - {moment(minor.completionDate).format('YYYY')}</li>
    );

    return (
        <div className="institution-line-item">
            <div className="institution-name">{this.props.institutionData.name}</div>
            <ul className="degrees-list">
              {degreeItems}
              {minorItems}
            </ul>
        </div>
    );
  }
}

export default InstitutionLineItem;