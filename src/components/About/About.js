import React from 'react';
import './About.css';
import ParticleBackground from '../ParticleBackground/ParticleBackground';
import Tile from '../Tile/Tile';
import img from "../../public/images/about.svg";
function About() {
  return (
    <div>
      <div className="about-container">
        <ParticleBackground />
        <div className="c1">
           <div className="r1">
           <Tile 
           img={img}
          position={"img-right"}
          bgColor={"f"}
          />
        </div>
      </div>
    </div>
    </div>
  )
}

export default About;