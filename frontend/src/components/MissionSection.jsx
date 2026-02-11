import React from 'react';
import { motion } from 'framer-motion';

const MissionSection = () => {
  return (
    <section className="section" data-testid="mission-section">
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
              01
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight uppercase mt-4 text-white">
              Mission
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
            <p className="text-lg md:text-xl text-neutral-300 leading-relaxed" data-testid="mission-text">
              To simplify the complex landscape of modern wealth by providing intuitive, AI-driven tools that bridge the gap between digital innovation and tangible security. We empower individuals to build their 'stack' with confidence, privacy, and clarity.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
