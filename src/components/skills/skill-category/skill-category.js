import React, { Component } from 'react';
import Skill from './skill/skill';
import _ from 'underscore';
import './skill-category.css';

class SkillCategory extends Component {
  render() {

    const skills = _.sortBy(this.props.categoryData.skills, 'skillLevel')
      .reverse()
      .map((skill) =>
        <li>
          <Skill key={skill.id} skillData={skill}/>
        </li>
    );

    return (
        <div className="skill-category">
            <div className="skill-category-header">
              {this.props.categoryData.name}
            </div>
            <ul className="skill-category-list">
              {skills}
            </ul>
        </div>
    );
  }
}

export default SkillCategory;
