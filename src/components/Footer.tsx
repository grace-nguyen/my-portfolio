import React from 'react';
import { FaEnvelope } from 'react-icons/fa';
import { MdLocationOn, MdPhone } from 'react-icons/md';
import Social from './Social';
import Title from './Title';

const Footer: React.FC = () => {
  return (
    <footer id="contacts" className=" text-white pt-24 py-16">
      <div className="container mx-auto px-4">
        <div className=" mx-auto text-center mb-12">
        <Title text='Contacts' />
        </div>
        <div className="grid grid-cols-1 gap-8">
          
          {/* Contact Information */}
          <div>
            <ul>
              <li className="flex items-center mb-4">
                <MdLocationOn className="text-yellow-400 mr-2" />
                <span>Victoria, Australia</span>
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