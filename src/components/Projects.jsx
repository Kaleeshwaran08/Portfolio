import React from 'react';
import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className='my-20 text-center text-4xl'
      >
        Projects
      </motion.h1>
      <div className='grid grid-cols-1 gap-6 px-4 lg:grid-cols-2'>
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 1 }}
            className='border border-neutral-800 rounded p-4'
          >
            <div className='flex items-center justify-center mb-4'>
              <img
                src={project.image}
                width={150}
                height={150}
                alt={project.title}
                className='rounded'
              />
            </div>
            <div>
              <h6 className='mb-2 font-semibold text-center lg:text-left'>
                {project.title}
              </h6>
              <p className='mb-4 font-neutral-400 text-center lg:text-left'>
                {project.description}
              </p>
              <div className='flex flex-wrap justify-center lg:justify-start'>
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className='mr-2 mb-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
