import React from 'react';
import '../styles/About.css';

function About() {
  return (
    <div className="about-container">
    <h1>About Me</h1>
    <div className="about-content">
      <div className="about-text">
        <p>
          Hello! I'm [Your Name], a passionate [Your Profession] based in [Your Location].
          I specialize in [Your Specialization] and have [X] years of experience in the industry.
        </p>
        <p>
          I have a strong background in [Your Background], and I love creating
          beautiful and functional web applications. When I'm not coding, you can find me
          [Your Hobbies or Interests].
        </p>
        <p>
          I'm always looking for new challenges and opportunities to grow. Feel free to
          reach out if you'd like to collaborate on a project or just want to say hi!
        </p>
      </div>
      <div className="about-image">
        <img src="[Your Profile Picture URL]" alt="Your Name" />
      </div>
    </div>
  </div>
  )
}

export default About;