import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { motion } from 'framer-motion';
import Title from './Title';

const SkillPage: React.FC = () => {
  const skills = useSelector((state: RootState) => state.portfolio.skills);

  return (
    <section id='skills' className="pt-24 py-16">
      {/* Header */}
      <div className=" mx-auto text-center mb-12">
        <Title text='Skills' />
      </div>

      {/* Skill Categories */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {skills.map((category, index) => (
          <motion.div 
            key={index} 
            className="p-6 bg-gray-700 rounded-2xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            >
            <h3 className="text-2xl text-center text-white font-semibold mb-6">{category.category}</h3>

            {/* Skill Items */}
            <div className="flex flex-wrap items-center justify-center">
              {category.items.map((skill, idx) => (
                <div key={idx} className="inline-flex items-center justify-center h-9 mb-4 mr-3 px-3 text-xs border border-gray-400 rounded-lg p-6 hover:bg-gray-600 transition">
                  <img src={skill.icon} alt={skill.name} className="w-8 h-8 mr-2" />
                  <h3 className="text-xl text-white">{skill.name}</h3>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillPage;
