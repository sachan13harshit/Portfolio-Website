import React, { useState } from "react";
import ProjectIten from "./ProjectItem";
import RadioCard from "./RadioCard";
import { projectsData } from "./constants";
import './Project.css';
import ParticleBackground from "../ParticleBackground/ParticleBackground";

const Projects = () => {
  const [selectedOption, setSelectedOption] = useState("ALL");
  
  const handleOptionChange = (value) => {
    setSelectedOption(value);
  };

  const filteredData = selectedOption === "ALL" ? projectsData : projectsData.filter((data) => data.type === selectedOption);

  const options = ["ALL"];

  return (
    <>
      <ParticleBackground />
      <div className="projects-container">
        <div className="projects-content">
          <h2 className="projects-heading">PROJECTS</h2>
          <div className="radio-group">
            {options.map((value) => (
              <RadioCard
                key={value}
                value={value}
                isSelected={selectedOption === value}
                onChange={handleOptionChange}
              />
            ))}
          </div>
          <div className="projects-grid">
            {filteredData.map((data, index) => (
              <ProjectIten key={index} title={data.title} image={data.image} link={data.link} source={data.source} className="{}" />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;