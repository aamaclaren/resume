import React, { Component } from 'react';
import SectionHeader from '../section-header/section-header';
import SkillsData from './skills-data.json';
import './skills.css';
import SkillCategory from './skill-category/skill-category';

class Skills extends Component {
  render() {

    const skillCategories = SkillsData.categories.map((category) =>
      <SkillCategory key={category.id} categoryData={category}/>
    );

    return (
        <div className="skills">
          <SectionHeader sectionTitle={SkillsData.sectionTitle}/>
          {skillCategories}
        </div>
    );
  }
}

export default Skills;
