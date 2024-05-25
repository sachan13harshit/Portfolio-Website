import React from 'react';
import ParticleBackground from '../components/ParticleBackground';
import '../styles/Home.css';
function Home() {
  return (
    <div className="home-container">
    <ParticleBackground />
    <div className="content">
      <h1>Harshit Sachan</h1>
      <p>Web Developer</p>
    </div>
  </div>
  )
}

export default Home;