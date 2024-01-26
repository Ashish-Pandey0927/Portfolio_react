import React from 'react'
import './About.css'
const About = () => {
  return (
    // <!-- -------------------about--------------------------------- -->
    <section className="about" id="about">
      <div className="about-img">
        <img src="\AshishP1.jpg" alt="" />
      </div>

      <div className="about-content">
        <h2 className="heading"><span>A</span>bout Me</h2>
        <h3>Frontend Developer</h3>
        <p>
          I'm a front end developer with years of experience in web Development.
          I've worked on a variety of projects for clients in the retail,
          travel, and healthcare industries. I'm passionate about creationg
          grate user experiences and have a strong understanding of usability
          and accessibility standards.....
        </p>
        <a href="/" className="btn">Read More</a>
      </div>
    </section>
  )
}

export default About