import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      const aboutSectionBottom = aboutSection.getBoundingClientRect().bottom;
      setIsVisible(window.scrollY > aboutSectionBottom);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    isVisible && (
      <div
        className="fixed right-5 bottom-5 bg-purple-500 text-white p-3 rounded-full cursor-pointer hover:bg-yellow-500 transition-all"
        onClick={scrollToTop}
      >
        <FaArrowUp size={24} />
      </div>
    )
  );
};

export default ScrollToTop;