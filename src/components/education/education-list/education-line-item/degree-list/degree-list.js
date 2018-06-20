import React, { Component } from 'react';
import DegreeLineItem from './degree-line-item/degree-line-item';
import './degree-list.css';

class DegreeList extends Component {
  render() {

    const degreeLineItems = this.props.degrees.map((degreeItem) =>
      <DegreeLineItem key={degreeItem.id} degreeData={degreeItem}/>
    );

    return (
        <div className="degree-list">
            {degreeLineItems}
        </div>
    );
  }
}

export default DegreeList;
