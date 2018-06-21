import React, { Component } from 'react';
import './section-header.css';

class SectionHeader extends Component {
  render() {
    return (
        <div className="section-header">
            <span className="section-title">{this.props.sectionTitle}</span>
        </div>
    );
  }
}

export default SectionHeader;
