import React, { Component } from 'react';
import EducationLineItem from './education-line-item/education-line-item';
import './education-list.css';

class EducationList extends Component {
  render() {

    const educationLineItems = this.props.educationData.map((educationItem) =>
      <EducationLineItem key={educationItem.id} educationData={educationItem}/>
    );

    return (
        <div className="education-list">
            {educationLineItems}
        </div>
    );
  }
}

export default EducationList;
