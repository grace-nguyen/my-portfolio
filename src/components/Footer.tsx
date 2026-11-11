import React from 'react';
import { FaEnvelope } from 'react-icons/fa';
import { MdLocationOn, MdPhone } from 'react-icons/md';
import Social from './Social';
import Title from './Title';

const Footer: React.FC = () => (
  <footer id="contacts" className="scroll-mt-24 border-t border-gray-800 py-16 text-white">
    <div className="container mx-auto px-4">
      <div className="mx-auto mb-8 text-center"><Title text="Contact" /></div>
      <p className="mb-8 text-center text-gray-300">Interested in working together? I would love to hear from you.</p>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-5 text-gray-300 sm:grid-cols-3">
        <div className="flex items-center justify-center gap-2"><MdLocationOn className="text-yellow-400" /><span>Victoria, Australia</span></div>
        <a href="tel:+61477691885" className="flex items-center justify-center gap-2 hover:text-purple-300"><MdPhone className="text-yellow-400" /><span>0477 691 885</span></a>
        <a href="mailto:grace.nnguyen1911@gmail.com" className="flex items-center justify-center gap-2 hover:text-purple-300"><FaEnvelope className="text-yellow-400" /><span className="break-all">grace.nnguyen1911@gmail.com</span></a>
      </div>
      <div className="mt-8 flex justify-center"><Social /></div>
      <p className="mt-10 text-center text-xs text-gray-500">© {new Date().getFullYear()} Grace Nguyen</p>
    </div>
  </footer>
);

export default Footer;
