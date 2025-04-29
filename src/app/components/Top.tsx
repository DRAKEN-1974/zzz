'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import './Top.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="hero-category">INNOVATIVE TRAINING</p>
          <h1 className="hero-title">Step into the World of K9 Excellence</h1>
          <p className="hero-description">
            Unlock your dog's potential with expert training crafted for obedience, agility, and a stronger bond.
          </p>
          <button className="hero-btn">Explore Training Programs</button>
        </motion.div>
        <motion.div
          className="hero-image"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/images/puppymain.jpg"
            alt="Hero Section Image"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;