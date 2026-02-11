import React from 'react';
import { motion } from 'framer-motion';

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
        <div className="flex items-center">
          {/* Logo - Using the uploaded image */}
          <div className="flex-shrink-0">
            <img 
              src="https://customer-assets.emergentagent.com/job_104ed172-efc8-440b-a01b-5f30ef985683/artifacts/inuuejnl_image.png"
              alt="Simply Smarter Ltd Logo"
              className="w-28 h-28 md:w-36 md:h-36 object-contain"
              data-testid="header-logo"
            />
          </div>
          
          {/* Title and Contact - Centered in remaining space */}
          <div className="flex-1 flex flex-col items-center">
            <h1 
              className="text-xl md:text-2xl lg:text-3xl font-bold tracking-[0.2em] uppercase text-white"
              data-testid="company-title"
            >
              Simply Smarter Ltd
            </h1>
            <a 
              href="mailto:admin@simplysmarter.io"
              className="text-sm md:text-base text-neutral-400 hover:text-white transition-colors duration-300 email-link mt-2"
              data-testid="contact-email"
            >
              admin@simplysmarter.io
            </a>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
