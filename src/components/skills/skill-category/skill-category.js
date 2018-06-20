import React, { Component } from 'react';
import Skill from './skill/skill';
import './skill-category.css';

class SkillCategory extends Component {
  render() {

    const skills = this.props.categoryData.skills.map((skill) =>
      <Skill key={skill.id} skillData={skill}/>
    );

    return (
        <div className="skill-category">
            {this.props.categoryData.name}
            {skills}
        </div>
    );
  }
}

export default SkillCategory;
