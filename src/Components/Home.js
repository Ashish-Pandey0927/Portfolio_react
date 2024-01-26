import React, { useEffect, useState } from 'react';
import './Home.css'
// import useTypewriter} from 'react-simple-typewriter'
// import { useTypewriter } from 'react-simple-typewriter';
// import { Cursor } from 'react-simple-typewriter';

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Your scroll logic here
      // Update active section based on the scroll position

      // Set active section based on scroll position
      // ...

      // Toggle sticky class on the header
      const header = document.querySelector('.header');
      header.classList.toggle('sticky', window.scrollY > 100);
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array to ensure the effect runs only once on mount

  return (
    <section className="home" id="home">
      <div className="firstsection">
      <span  className="name">Ashish Pandey</span>
     
        <div className="leftsect">
          <h5>Hey, My name is</h5> 
          
          
          
            {/* <span>and I am a ardent</span> */}
            
            {/* <!-- <span>Web Developer</span> --> */}
            <span id="element" ></span>
          <div className="social-media">
            <a href="/"><i className="bx bxl-facebook"></i></a>
            <a href="/"><i className="bx bxl-instagram"></i></a>
            <a
              href="https://www.linkedin.com/in/ashish-pandey-b5408a271/" ><i className="bx bxl-linkedin"></i></a>
            <a href="https://github.com/Ashish-Pandey0927" ><i className="bx bxl-github"></i></a>
          </div>
        </div>
        <i class='bx bx-chevrons-down' id='down'></i>
        
      </div>
    </section>
  )
}

export default Home