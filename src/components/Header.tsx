import React from 'react';
import { FaDownload } from 'react-icons/fa';
const Header: React.FC = () => {

  // Smooth scroll to section
  const handleScrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-900 shadow-md z-50 p-6">
      {/* Navbar */}
      <nav className="container mx-auto flex justify-between items-center mb-8">
        {/* Logo */}
        <div className="text-2xl font-bold text-gradient bg-gradient-to-r from-purple-400 to-yellow-400 bg-clip-text text-transparent">
          Portfolio
        </div>

        {/* Menu */}
        <ul className="flex space-x-8">
          {['About', 'Experience', 'Skills', 'Education', 'Contacts'].map((item) => (
            <li
              key={item}
              className="cursor-pointer hover:text-purple-400 transition-colors"
              onClick={() => handleScrollToSection(item.toLowerCase())}
            >
              {item}
            </li>
          ))}
        </ul>

        <a
          href="https://drive.google.com/file/d/123Itea8e4hOSXbOt_CpEss2WF9nrPDBd/view?usp=sharing" 
          target='_blank'
          download
          className="mt-4 bg-gradient-to-r from-purple-500 to-yellow-500 text-white font-semibold py-2 px-4 rounded flex items-center"
        >
          <FaDownload className="mr-2" />
          Download CV
        </a>
      </nav>

    </header>
  );
};

export default Header;