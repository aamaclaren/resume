import React, { Component } from 'react';
import './degree-line-item.css';

class DegreeLineItem extends Component {
  render() {
    return (
        <div className="degree-line-item">
            <p>{this.props.degreeData.type} in {this.props.degreeData.field}</p>
        </div>
    );
  }
}

export default DegreeLineItem;
