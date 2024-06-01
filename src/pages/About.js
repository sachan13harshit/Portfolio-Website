import React from 'react';
import '../styles/About.css';
import ParticleBackground from '../components/ParticleBackground';
import Tile from '../components/Tile/Tile';
import img from "../utils/home-main.svg"
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