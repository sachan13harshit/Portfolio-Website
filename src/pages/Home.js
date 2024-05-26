import React from 'react';
import ParticleBackground from '../components/ParticleBackground';
import '../styles/Home.css';
import profile from '../utils/profile.png';
import Type from '../components/Type';
import { AiFillGithub} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
function Home() {
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
          <div className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a id="github"
                  href="https://github.com/sachan13harshit"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
             
              <li className="social-icons">
                <a id="linkedin"
                  href="https://www.linkedin.com/in/sachanharshit/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </div>
        </div>
    </div>
  </div>
  )
}

export default Home;