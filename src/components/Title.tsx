import React from 'react';
import { motion } from 'framer-motion';

interface TitleProps {
  text: string;
  children?: React.ReactNode;
}

const Title: React.FC<TitleProps> = ({ text, children }) => {
  return (
    <motion.h2
      className="pb-3 text-3xl font-bold text-white relative inline-block"
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {text}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-yellow-400 to-purple-500 rounded-full"></div>
      {children}
    </motion.h2>
  );
};

export default Title;