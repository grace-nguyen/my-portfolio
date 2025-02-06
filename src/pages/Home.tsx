import React from 'react';
import Header from '../components/Header';
import Employment from '../components/Experience';
import Certificates from '../components/Certificates';
import Education from '../components/Education';
import Footer from '../components/Footer';
import About from '../components/About';
import Skills from '../components/Skills';
import ScrollToTop from '../components/ScrollToTop';

const Home: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white ">
       <div className="container mx-auto p-4">
        <Header />
        <About />
        <Employment />
        <Skills />
        <Education />
        <Certificates />
        <Footer />
        <ScrollToTop />
      {/* Add other sections here */}
      </div>
    </div>
   
  );
};

export default Home;