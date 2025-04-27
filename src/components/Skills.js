import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'SEO', 'Content Marketing', 'UI/UX Design'];
  return (
    <section className="skills" id="skills">
      <h2>My Skills</h2>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index} className="skill-item">{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;