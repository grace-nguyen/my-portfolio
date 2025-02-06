import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const SkillPage: React.FC = () => {
  const skills = useSelector((state: RootState) => state.portfolio.skills);

  return (
    <section id='skills' className="pt-24 py-16">
      {/* Header */}
      <div className=" mx-auto text-center mb-12">
        <h2 className="pb-3 text-3xl font-bold text-white relative inline-block">
        Skills
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-yellow-400 to-purple-500 rounded-full"></div>
        </h2>
      </div>

      {/* Skill Categories */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {skills.map((category, index) => (
          <div key={index} className="p-6 bg-gray-700 rounded-2xl">
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillPage;
