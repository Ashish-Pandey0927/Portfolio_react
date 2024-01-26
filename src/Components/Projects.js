import React from 'react'
import './Projects.css'
const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2 className="heading">My <span>Projects</span></h2>

      <div className="portfolio-container">
        <div className="portfolio-box">
          <img src="image/portfolio1.jpg" alt="" />
          <div className="portfolio-layer">
            <h4>Web Design</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae,
              numquam.
            </p>
            <a href="/"><i className="bx bx-link-external"></i></a>
          </div>
        </div>

        <div className="portfolio-box">
          <img src="image/portfolio2.jpg" alt="" />
          <div className="portfolio-layer">
            <h4>Web Design</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae,
              fugit!
            </p>
            <a href="/"><i className="bx bx-link-external"></i></a>
          </div>
        </div>

        <div className="portfolio-box">
          <img src="image/portfolio3.jpg" alt="" />
          <div className="portfolio-layer">
            <h4>Web Design</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
              eligendi.
            </p>
            <a href="/"><i className="bx bx-link-external"></i></a>
          </div>
        </div>

        <div className="portfolio-box">
          <img src="image/portfolio4.jpg" alt="" />
          <div className="portfolio-layer">
            <h4>Web Design</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
              fugit.
            </p>
            <a href="/"><i className="bx bx-link-external"></i></a>
          </div>
        </div>

        <div className="portfolio-box">
          <img src="image/portfolio5.jpg" alt="" />
          <div className="portfolio-layer">
            <h4>Web Design</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
              ipsa.
            </p>
            <a href="/"><i className="bx bx-link-external"></i></a>
          </div>
        </div>

        <div className="portfolio-box">
          <img src="image/portfolio6.jpg" alt="" />
          <div className="portfolio-layer">
            <h4>Web Design</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus,
              aliquid!
            </p>
            <a href="/"><i className="bx bx-link-external"></i></a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects