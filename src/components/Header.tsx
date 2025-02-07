import React, { useState } from 'react';
import { FaBars, FaDownload, FaTimes } from 'react-icons/fa';

const Header: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleScrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsSidebarOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-900 shadow-md z-50 p-4 md:p-6">
      {/* Desktop Navbar */}
      <nav className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl md:text-2xl font-bold text-gradient bg-gradient-to-r from-purple-400 to-yellow-400 bg-clip-text text-transparent">
          Portfolio
        </div>

        {/* Desktop Menu - Ẩn trên mobile */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="hidden md:flex space-x-6 lg:space-x-8">
            {['About', 'Experience', 'Skills', 'Education', 'Contacts'].map((item) => (
              <li
                key={item}
                className="cursor-pointer text-white hover:text-purple-400 transition-colors"
                onClick={() => handleScrollToSection(item.toLowerCase())}
              >
                {item}
              </li>
            ))}
          </ul>

          {/* Desktop CV Button */}
          <a
            href="https://drive.google.com/file/d/123Itea8e4hOSXbOt_CpEss2WF9nrPDBd/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center bg-gradient-to-r from-purple-500 to-yellow-500 text-white font-semibold py-2 px-4 rounded"
          >
            <FaDownload className="mr-2" />
            Download CV
          </a>
        </div>

        {/* Mobile Menu Button - Hiển thị trên mobile */}
        <button 
          onClick={() => setIsSidebarOpen(true)}
          className="md:hidden text-white p-2 rounded-lg bg-transparent"
        >
          <FaBars size={24} />
        </button>
      </nav>

      {/* Mobile Sidebar Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-[60] transition-opacity ${
          isSidebarOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsSidebarOpen(false)}
      />

      {/* Mobile Sidebar Content */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-gray-900 z-[70] transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-between items-center p-6 border-b border-gray-800">
          <div className="text-xl font-bold text-gradient bg-gradient-to-r from-purple-400 to-yellow-400 bg-clip-text text-transparent">
            Portfolio
          </div>
          <button 
            onClick={() => setIsSidebarOpen(false)}
            className="text-white p-2"
          >
            <FaTimes size={20} />
          </button>
        </div>

        <ul className="flex flex-col space-y-4 p-6">
          {['About', 'Experience', 'Skills', 'Education', 'Contacts'].map((item) => (
            <li
              key={item}
              className="cursor-pointer text-white hover:text-purple-400 transition-colors py-2"
              onClick={() => handleScrollToSection(item.toLowerCase())}
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-800">
          <a
            href="https://drive.google.com/file/d/13SzuCXtiknqF1SEAGt-F0-hYl-vw0qpd/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center bg-gradient-to-r from-purple-500 to-yellow-500 text-white font-semibold py-2 px-4 rounded"
          >
            <FaDownload className="mr-2" />
            Download CV
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;