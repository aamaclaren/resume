import React, { Component } from 'react';
import SectionHeader from './section-header/section-header';
import SectionBody from './section-body/section-body';
import './section.css';

class Section extends Component {
  render() {
    return (
        <div className={"section " + this.props.sectionName + "-section"}>
            <SectionHeader sectionTitle={this.props.sectionTitle}/>
            <SectionBody>
                {this.props.children}
            </SectionBody>
        </div>
    );
  }
}

export default Section;
