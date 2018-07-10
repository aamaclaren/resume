import React, { Component } from 'react';
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

const SectionHeader = (props) => {
    if(!props.sectionTitle) {
        return null;
    }

    return (
        <div className="section-header">
            <span className="section-title">{props.sectionTitle}</span>
        </div>
    );
};

const SectionBody = (props) => {
    return (
        <div className="section-body">
            {props.children}
        </div>
    );
};

export default Section;
