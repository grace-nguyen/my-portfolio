import React from 'react';
import { motion } from 'framer-motion';
import Title from './Title';

const CareerBreak: React.FC = () => (
  <section id="career-break" className="scroll-mt-24 py-16">
    <div className="mb-10 text-center"><Title text="Career Break & Professional Development" /></div>
    <div className="container mx-auto grid grid-cols-1 gap-6 md:grid-cols-2">
      <motion.article className="rounded-2xl border border-gray-700 bg-gray-800/90 p-6" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <p className="text-sm font-medium text-purple-300">October 2025 – Present</p>
        <h3 className="mt-2 text-xl font-semibold text-white">Career Break – Family Care</h3>
        <p className="mt-3 text-sm leading-7 text-gray-300">Taking a planned career break to focus on family and childcare responsibilities.</p>
      </motion.article>
      <motion.article className="rounded-2xl border border-gray-700 bg-gray-800/90 p-6" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <p className="text-sm font-medium text-purple-300">October 2025 – Present</p>
        <h3 className="mt-2 text-xl font-semibold text-white">Technical Development & Personal Projects</h3>
        <ul className="mt-3 space-y-2 text-sm leading-7 text-gray-300">
          <li className="flex gap-2"><span className="text-yellow-400">•</span><span>Continued developing technical skills in C# and ASP.NET Core.</span></li>
          <li className="flex gap-2"><span className="text-yellow-400">•</span><span>Built and improved personal software projects using ASP.NET Core and Next.js.</span></li>
          <li className="flex gap-2"><span className="text-yellow-400">•</span><span>Practised frontend and backend development, API integration and database design.</span></li>
        </ul>
      </motion.article>
    </div>
  </section>
);

export default CareerBreak;
