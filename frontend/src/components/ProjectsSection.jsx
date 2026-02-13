import React from 'react';
import { motion } from 'framer-motion';

const ProjectsSection = () => {
  return (
    <section className="section" data-testid="projects-section">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          {/* Title */}
          <motion.div 
            className="md:col-span-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="text-xs font-mono tracking-[0.2em] uppercase text-neutral-500">
              02
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight uppercase mt-4 text-white">
              Future Projects
            </h2>
          </motion.div>
          
          {/* Content */}
          <motion.div 
            className="md:col-span-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            <div className="border border-neutral-800 p-8 md:p-12" data-testid="coming-soon-container">
              <div className="flex items-center gap-4">
                <span className="font-mono text-sm tracking-[0.3em] uppercase text-neutral-500 pulse-subtle">
                  Coming Soon
                </span>
                <div className="flex-1 h-px bg-neutral-800"></div>
              </div>
              <p className="text-neutral-500 mt-6 text-sm">
                Innovative solutions in development. Stay tuned.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
