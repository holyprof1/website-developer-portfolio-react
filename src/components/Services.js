import React from 'react';
import { motion } from 'framer-motion';
import './Services.css';

const Services = () => {
  const services = [
    { icon: 'fab fa-wordpress', title: 'WordPress Development', desc: 'Custom themes and plugins.' },
    { icon: 'fas fa-laptop', title: 'Frontend Development', desc: 'Responsive, user-friendly interfaces.' },
    { icon: 'fas fa-bullhorn', title: 'Digital Marketing', desc: 'Data-driven campaigns for growth.' },
    { icon: 'fas fa-search', title: 'SEO Optimization', desc: 'Boost organic traffic.' },
  ];

  return (
    <section className="services" id="services">
      <motion.h2
        className="title"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        My Services
      </motion.h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="service-item"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
          >
            <i className={service.icon}></i>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;