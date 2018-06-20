import React, { Component } from 'react';
import './skill.css';

class Skill extends Component {
  render() {
    return (
        <div className="skill">
            {this.props.skillData.name}
        </div>
    );
  }
}

export default Skill;
