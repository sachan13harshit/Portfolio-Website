import React from 'react';
import ParticleBackground from '../components/ParticleBackground';
import '../styles/Home.css';
import profile from '../utils/profile.png';
import Type from '../components/Type';
function Home() {
  const imageStyle = {
    objectFit: "shrink",
    width: ["13rem", "13rem", "8rem"],
    height: ["13rem", "13rem", "15rem"],
    marginTop: ["5rem", "5rem", null],
    marginBottom: ["1rem", "1rem", null],
    backgroundColor: "blue", // Replace with your theme color variable
    borderRadius: "30rem",
  };
  return (
    <div className="home-container">
    <ParticleBackground />
    <div className="content">
        <div className="row">
          <div className="home-image">
           <img className="profile-image" src={profile} alt="profile" />
          </div>
          <div className="home-down">
            <div className="home-text">
              <h1>
                Hi , my name is
              </h1>
            </div>
            <div>
            <h1 className="heading-name">
              I'M <strong className="main-name">Harshit Sachan</strong>
            </h1>
            </div>
            <div className="type-container">
            <h1>
              I am a <strong className="type"> <Type /></strong>
            </h1>
           </div>
          </div>
        </div>
    </div>
  </div>
  )
}

export default Home;