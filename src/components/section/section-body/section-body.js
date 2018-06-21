import React, { Component } from 'react';
import './section-body.css';

class SectionBody extends Component {
  render() {
    return (
        <div className="section-body">
            {this.props.children}
        </div>
    );
  }
}

export default SectionBody;
