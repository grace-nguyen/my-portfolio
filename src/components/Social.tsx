import React from 'react';
import {  FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const Social: React.FC = () => {
  return (
    <div className="flex space-x-6">
        <a href="https://github.com/grace-nguyen" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-400">
            <FaGithub size={24} />
        </a>
        <a href="https://www.linkedin.com/in/gracenguyen1911" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-400">
            <FaLinkedin size={24} />
        </a>
        <a href="mailto:grace.nnguyen1911@gmail.com" className="text-white hover:text-purple-400 transition-colors mr-4">
            <FaEnvelope size={24} />
        </a>
    </div>
    
  );
};

export default Social;