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
              Mission Statement
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
              Our Vision is to build tools connecting people with AI in productivity and life enhancing ways while still keeping alive a sense of fun curiosity and wonder.
            </p>
            <p className="text-lg md:text-xl text-neutral-300 leading-relaxed mt-6">
              We are entering a time of unprecedented change and advancement in Artificial Intelligence. We're on the journey, come join us...
            </p>
            <p className="text-xl md:text-2xl text-white font-semibold mt-6 tracking-wide">
              The Simply Smarter Way!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
