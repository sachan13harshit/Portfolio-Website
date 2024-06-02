import React from 'react';
import { skillsData } from './SkillComponent/skill-data';
import { skillsImage } from './SkillComponent/skill-image';
import Marquee from 'react-fast-marquee';
import './Skills.css';
import ParticleBackground from '../ParticleBackground/ParticleBackground';
import ToolSet from './SkillComponent/Tools-skills';
import { Container } from 'react-bootstrap';
import Leetcode from './SkillComponent/Leetcode';

function Skills() {
  return (
      <Container fluid className="skills-container">
      <ParticleBackground />
      <div className="skills-header-container">
      <h1 className="project-heading">
          Professional <strong className="yellow">Skillset </strong>
        </h1>
      </div>
      <div className="skills-marquee-container">
        <Marquee
          gradient={false}
          speed={80}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >
          {skillsData.map((skill, id) => (
            <div className="skill-item" key={id}>
              <div className="skill-card">
                <div className="skills-top-line">
                  <div className="skills-line-container">
                    <div className="skills-gradient-line" />
                  </div>
                </div>
                <div className="skill-content">
                  <div className="skill-image">
                    <img
                      src={skillsImage(skill)}
                      alt={skill}
                      width={40}
                      height={40}
                      className="skill-image-content"
                    />
                  </div>
                  <p className="skill-name">
                    {skill}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
      <Container>
       <h1 className="project-heading">
          <strong className="yellow">Tools</strong> I use
        </h1>
        <ToolSet />
        <Leetcode />
        </Container>
     
    </Container>
  );
}

export default Skills;
