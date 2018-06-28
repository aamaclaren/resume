import React, { Component } from 'react';
import InstitutionLineItem from './institution-line-item/institution-line-item';
import './institution-list.css';

class InstitutionList extends Component {
  render() {

    const institutionLineItems = this.props.educationData.map((institutionItem) =>
      <InstitutionLineItem key={institutionItem.id} institutionData={institutionItem}/>
    );

    return (
        <div className="institution-list">
            {institutionLineItems}
        </div>
    );
  }
}

export default InstitutionList;
