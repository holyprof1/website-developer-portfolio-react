import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      category: 'web',
      title: 'Legend Exhibition',
      img: 'http://holyprofweb.com/wp-content/uploads/2024/12/IMG_5548.jpeg',
      desc: 'Website with advanced features for booth construction.',
      link: 'https://legendexhibition.com',
    },
    {
      category: 'web',
      title: 'Payvessel',
      img: 'http://holyprofweb.com/wp-content/uploads/2025/02/Screenshot-2025-02-01-140814.png',
      desc: 'Fintech-focused website enhancing user experience.',
      link: 'https://payvessel.com',
    },
    {
      category: 'digital',
      title: 'FundedNext',
      img: 'http://holyprofweb.com/wp-content/uploads/2024/12/IMG_5547.jpeg',
      desc: 'Grew Facebook communities to 75K+ followers.',
    },
  ];

  const filteredProjects =
    filter === 'all' ? projects : projects.filter((project) => project.category === filter);

  return (
    <section className="projects" id="projects">
      <motion.h2
        className="title"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        My Projects
      </motion.h2>
      <div className="filters">
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('web')}>Website Development</button>
        <button onClick={() => setFilter('digital')}>Digital Marketing</button>
      </div>
      <div className="project-gallery">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
          >
            <img src={project.img} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;