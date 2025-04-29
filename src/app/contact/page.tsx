'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Footer from '../components/footer';
import './contact.css';

export default function Contact() {
  return (
    <main className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Contact Us</h1>
          <p>We'd love to hear from you! Reach out to us for any inquiries or assistance.</p>
        </motion.div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <motion.div
          className="form-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2>Get in Touch</h2>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" placeholder="Enter your name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" placeholder="Enter your email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea id="message" rows="5" placeholder="Enter your message" required></textarea>
            </div>
            <motion.button
              type="submit"
              className="submit-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </section>

      {/* Map Section */}
      <section className="contact-map-section">
        <motion.div
          className="map-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2>Our Location</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509374!2d144.9537353153167!3d-37.81627974202171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d8b3c5f1b9b!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1611814737743!5m2!1sen!2sau"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
        </motion.div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}