'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import './navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.6,
        ease: [0.6, 0.01, 0.05, 0.95],
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, 0.01, 0.05, 0.95],
      },
    },
  };

  return (
    <nav className="navbar">
      <div className="nav-content">
        <Link href="/" className="logo">
          K9SCHOOLS
        </Link>

        <button
          className={`menu-button ${isOpen ? 'open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <span>menu</span>
          <div className="hamburger">
            <span></span>
            <span></span>
          </div>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="menu-overlay"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <div className="menu-content">
              <div className="menu-header">
                <Link href="/" className="logo" onClick={() => setIsOpen(false)}>
                 
                </Link>
                <button
                  className="menu-button open"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close Menu"
                >
                  <span>close</span>
                  <div className="hamburger">
                    <span></span>
                    <span></span>
                  </div>
                </button>
              </div>
              <div className="menu-links">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <Link href="/" onClick={() => setIsOpen(false)}>
                    Home
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Link href="/services" onClick={() => setIsOpen(false)}>
                    Services
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Link href="/donation" onClick={() => setIsOpen(false)}>
                    Donation
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Link href="/about" onClick={() => setIsOpen(false)}>
                    About
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    Contact
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;