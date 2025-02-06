import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import Social from './Social';

const About: React.FC = () => {
    const portfolio = useSelector((state: RootState) => state.portfolio);
  return (
    <section id="about" className="pt-50 py-16 min-h-screen"> 
      <div className="container mx-auto flex items-center">
        {/* Avatar */}
        <div className="w-1/3 flex justify-center">
          <img
            src="/avatar.jpeg"
            alt="Avatar"
            className="w-64 h-64 rounded-full border-4 border-gradient-to-r from-purple-500 to-yellow-500"
          />
        </div>

        {/* Text About */}
        <div className="w-2/3 text-white">
          <h2 className="text-3xl font-bold mb-4">Hi, I'm Grace Nguyen</h2>
          <p className="text-gray-300">
            {portfolio.professionalSummary}
          </p>
          
        </div>
      </div>
      <div className="container mx-auto flex items-center">
        <div className="w-1/3 flex justify-center mt-40"></div>
        <div className="w-2/3 text-white">
        <Social />
        </div>
      </div>
    </section>
  );
};

export default About;