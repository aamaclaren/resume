import React, { Component } from 'react';
//import moment from 'moment';
import './institution-line-item.css';

class InstitutionLineItem extends Component {
  render() {
    return (
        <div className="institution-line-item">
            <p>{this.props.institutionData.name}</p>
        </div>
    );
  }
}

export default InstitutionLineItem;