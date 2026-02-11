import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <motion.footer 
      className="py-12 px-6 md:px-12 border-t border-neutral-900"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      data-testid="footer"
    >
      <div className="max-w-screen-2xl mx-auto">
        <p className="text-xs text-neutral-600" data-testid="copyright-text">
          © {currentYear} Simply Smarter Ltd. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
