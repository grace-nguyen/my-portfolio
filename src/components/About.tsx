import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import Social from './Social';
import { motion } from 'framer-motion';

const About: React.FC = () => {
    const portfolio = useSelector((state: RootState) => state.portfolio);
  return (
    <section id="about" className="pt-50 py-16 min-h-screen"> 
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Avatar */}
        <motion.div 
          className="w-full md:w-1/3 flex justify-center md:mr-5"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          >
          <img
            src="/avatar.jpeg"
            alt="Avatar"
            className="w-60 h-60 rounded-full border-4 border-gradient-to-r from-purple-500 to-yellow-500"
          />
        </motion.div>

        {/* Text About */}
        <motion.div 
          className="w-full md:w-2/3 text-white mt-6 md:mt-0"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">Hi, I'm Grace Nguyen</h2>
          <p className="text-gray-300">
            {portfolio.professionalSummary}
          </p>
          
        </motion.div>
      </div>
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="w-1/3 flex justify-center mt-10 md:mt-40"></div>
        <motion.div 
          className="w-full md:w-2/3 text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
        <Social />
        </motion.div>
      </div>
    </section>
  );
};

export default About;