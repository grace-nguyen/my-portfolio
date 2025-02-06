import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const Certificates: React.FC = () => {
  const certificates = useSelector((state: RootState) => state.portfolio.certificates);

  return (
    <section id="education" className="pt-16 ">
    {/* Header */}
    <div className=" mx-auto text-center mb-12">
      <h2 className="pb-3 text-3xl font-bold text-white relative inline-block">
      Certificates
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-yellow-400 to-purple-500 rounded-full"></div>
      </h2>
    </div>

    <div className="container mx-auto grid grid-cols-1  gap-8 mt-12">
      {certificates.map((certificate, index) => (
        <div
          key={index}
          className="p-6 bg-gray-700 rounded-2xl"
        >
          {/* Outer border container */}
          <div className="border-4 border-solid border-transparent bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30 rounded-2xl p-4 
              border-[linear-gradient(to_right,_#f59e0b,_#8b5cf6)]">
            {/* Job title */}
            <h3 className="text-2xl font-semibold text-white">
              <a href={certificate.linkTitle} target="_blank" rel="noopener noreferrer" className='text-purple-400'>{certificate.title} </a>
            </h3>
            {/* Duration */}
            <p className="text-sm text-gray-400 mt-1">{certificate.date}</p>

            {/* Responsibilities */}
            <ul className="mt-4 space-y-2">
              {certificate.responsibilities.map((responsibility, i) => (
                <li key={i} className="flex items-start text-gray-300">
                  <span className="text-yellow-400 mr-2">•</span>
                  {responsibility}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
    
    
  </section>
  );
};

export default Certificates;