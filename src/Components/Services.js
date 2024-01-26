import React from 'react'
import './Services.css'
const Services = () => {
  return (
    // <!-- ---------------------services------------------------------------------------- -->
    <section className="services" id="services">
      <h2 className="heading">My<span> Services</span></h2>

      <div className="services-container">
        <div className="services-box">
          <i className="bx bx-code-block"></i>
          <h3>Web Development</h3>
          <p>
            I can provide you the well designed, functional and easy to use
            Web-site for your work at very reasonable price....
          </p>
          <a href="/" className="btn">Read More</a>
        </div>

        <div className="services-box">
          <i className="bx bxs-pyramid"></i>
          <h3>Graphic Design</h3>
          <p>
            I Love being able to create beautiful designs that make people's
            lives easier, and I especially love working with startups and
            small....
          </p>
          <a href="/" className="btn">Read More</a>
        </div>

        <div className="services-box">
          <i className="bx bxs-cube"></i>
          <h3>App Development</h3>
          <p>
            Looking to start a business or build an app? Let me Build It For
            You-Books A Demo Today....
          </p>
          <a href="/" className="btn">Read More</a>
        </div>
      </div>
    </section>
  )
}

export default Services