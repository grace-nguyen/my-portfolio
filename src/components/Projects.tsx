import React from 'react';
import { motion } from 'framer-motion';
import Title from './Title';

const projects = [
  {
    name: 'SmartParking Systems',
    status: 'In progress',
    description: 'A personal full-stack parking management project focused on vehicle tracking, parking fee calculation and maintainable API design.',
    technologies: ['C#', 'ASP.NET Core 8', 'REST API', 'Next.js', 'TypeScript', 'Swagger'],
    highlights: ['Layered architecture with Controllers, Services, Models and DTOs', 'Dependency Injection and input validation', 'Dynamic parking fee calculation and multi-vehicle tracking'],
  },
  {
    name: 'ConOi',
    status: 'Personal e-commerce project',
    description: 'An e-commerce and print-on-demand project built with WordPress and WooCommerce.',
    technologies: ['WordPress', 'WooCommerce', 'PHP', 'E-commerce', 'SEO'],
    highlights: ['Product catalogue and online store management', 'Payment gateway and order fulfilment workflows', 'Responsive website experience and SEO improvements'],
  },
];

const Projects: React.FC = () => (
  <section id="projects" className="scroll-mt-24 py-16">
    <div className="mb-12 text-center"><Title text="Featured Projects" /></div>
    <div className="container mx-auto grid grid-cols-1 gap-6 lg:grid-cols-2">
      {projects.map((project, index) => (
        <motion.article
          key={project.name}
          className="rounded-2xl border border-gray-600/70 bg-gray-800/90 p-6 shadow-lg shadow-black/10 transition hover:-translate-y-1 hover:border-purple-400/70"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: index * 0.12 }}
          viewport={{ once: true }}
        >
          <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
            <h3 className="text-xl font-bold text-white md:text-2xl">{project.name}</h3>
            <span className="rounded-full border border-purple-400/40 bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-200">{project.status}</span>
          </div>
          <p className="mb-5 leading-7 text-gray-300">{project.description}</p>
          <h4 className="mb-2 text-sm font-semibold uppercase tracking-wide text-gray-200">Key features</h4>
          <ul className="mb-5 space-y-2 text-sm leading-6 text-gray-300">
            {project.highlights.map((item) => <li key={item} className="flex gap-2"><span className="text-yellow-400">•</span><span>{item}</span></li>)}
          </ul>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((technology) => <span key={technology} className="rounded-md border border-gray-600 bg-gray-900/60 px-2.5 py-1 text-xs text-purple-200">{technology}</span>)}
          </div>
        </motion.article>
      ))}
    </div>
  </section>
);

export default Projects;
