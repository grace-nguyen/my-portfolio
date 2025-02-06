import React from 'react';
import { FaEnvelope } from 'react-icons/fa';
import { MdLocationOn, MdPhone } from 'react-icons/md';
import Social from './Social';

const Footer: React.FC = () => {
  return (
    <footer id="contacts" className=" text-white pt-24 py-16">
      <div className="container mx-auto px-4">
        <div className=" mx-auto text-center mb-12">
          <h2 className="pb-3 text-3xl font-bold text-white relative inline-block">
          Contact
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-yellow-400 to-purple-500 rounded-full"></div>
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8">
          
          {/* Contact Information */}
          <div>
            <ul>
              <li className="flex items-center mb-4">
                <MdLocationOn className="text-yellow-400 mr-2" />
                <span>Geelong, Vic, Australia</span>
              </li>
              <li className="flex items-center mb-4">
                <MdPhone className="text-yellow-400 mr-2" />
                <span>0477 691 885</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-yellow-400 mr-2" />
                <span>grace.nnguyen1911@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Follow Me</h3>
            <Social />
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;