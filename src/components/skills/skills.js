import React, { Component } from 'react';
import Section from '../section/section';
import SkillsData from './skills-data.json';
import './skills.css';
import SkillCategory from './skill-category/skill-category';

class Skills extends Component {
  render() {

    const skillCategories = SkillsData.categories.map((category) =>
      <SkillCategory key={category.id} categoryData={category}/>
    );

    return (
      <Section sectionName="skills" sectionTitle={SkillsData.sectionTitle}>
        <div className="skills">
          {skillCategories}
        </div>
      </Section>
    );
  }
}

export default Skills;
