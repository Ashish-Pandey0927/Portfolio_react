// App.js or relevant component
import React, { useState, useEffect } from 'react';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About'
import Loader from './Components/Loader'; // Import the Loader component
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer'
import './App.css';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay (you can replace this with actual data fetching or any other async task)
    const delay = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust the delay as needed

    return () => clearTimeout(delay); // Cleanup on component unmount
  }, []);

  return (
    <div>
      {loading ? <Loader /> : (
        <div>
          <Header />
          <Home />
          <About />
          <Projects />
          <Contact />
          <Footer />
          {/* Add other components as needed */}
        </div>
      )}
    </div>
  );
};

export default App;
