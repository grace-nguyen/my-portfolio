import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import Social from './Social';
import { motion } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa';

const About: React.FC = () => {
  const portfolio = useSelector((state: RootState) => state.portfolio);

  return (
    <section id="about" className="scroll-mt-24 py-20 md:py-28">
      <div className="container mx-auto flex flex-col items-center gap-10 md:flex-row md:gap-14">
        <motion.div
          className="flex w-full justify-center md:w-1/3"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <img
            src="/avatar.jpeg"
            alt="Grace Nguyen, Software Engineer"
            className="h-44 w-44 rounded-full border-4 border-purple-400 object-cover shadow-xl shadow-purple-950/40 md:h-56 md:w-56"
            fetchPriority="high"
          />
        </motion.div>

        <motion.div
          className="w-full text-center text-white md:w-2/3 md:text-left"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-purple-300">Software Engineer · Victoria, Australia</p>
          <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-5xl">Hi, I'm Grace Nguyen</h1>
          <p className="mb-5 text-base leading-7 text-gray-300 md:text-lg">{portfolio.professionalSummary}</p>
          <p className="mb-6 inline-flex rounded-full border border-purple-400/40 bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-200">
            Australian Permanent Resident · Full unrestricted working rights
          </p>
          <div className="flex justify-center md:justify-start">
            <Social />
          </div>
          <a
            href="#skills"
            aria-label="Scroll down to explore my skills and portfolio"
            title="Explore more"
            className="mt-8 inline-flex h-12 w-12 items-center justify-center rounded-full border border-purple-400/60 bg-purple-500/15 text-purple-200 shadow-lg shadow-purple-950/20 transition hover:-translate-y-1 hover:border-purple-300 hover:bg-purple-500/30 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-300"
          >
            <FaArrowDown size={20} aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
