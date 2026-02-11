import React from 'react';
import { motion } from 'framer-motion';
import Logo from './Logo';

const Header = () => {
  return (
    <motion.header 
      className="w-full py-8 px-6 md:px-12"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      data-testid="header"
    >
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          {/* Logo and Title Group */}
          <div className="flex items-center gap-6">
            <Logo size={56} data-testid="header-logo" />
            <div className="flex flex-col">
              <h1 
                className="text-lg md:text-xl font-bold tracking-[0.2em] uppercase text-white"
                data-testid="company-title"
              >
                Simply Smarter Ltd
              </h1>
              <a 
                href="mailto:admin@simplysmarter.io"
                className="text-sm text-neutral-400 hover:text-white transition-colors duration-300 email-link mt-1"
                data-testid="contact-email"
              >
                admin@simplysmarter.io
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
