
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import "./donation.css";
import Footer from "../components/footer";

export default function DonationPage() {
  const [amount, setAmount] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you for your generous donation of $${amount}!`);
    setAmount("");
  };

  return (
    <main className="donation-page">
      {/* Hero Section */}
      <section className="donation-hero">
        <video className="hero-video" autoPlay loop muted playsInline>
          <source src="/images/2849936-uhd_3840_2160_24fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="overlay"></div>
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>Make a Difference</h1>
          <p>Your contribution helps us care for and support our furry friends.</p>
        </motion.div>
      </section>

      {/* Donation Form Section */}
      <section className="donation-form-section">
        <motion.div
          className="form-container"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1 }}
        >
          <h2>Donate Now</h2>
          <p>Every donation makes a big impact. Thank you for your generosity!</p>
          <form onSubmit={handleSubmit} className="donation-form">
            <div className="form-group">
              <label htmlFor="amount">Donation Amount (USD)</label>
              <input
                type="number"
                id="amount"
                name="amount"
                placeholder="Enter amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                required
              />
            </div>
            <motion.button
              type="submit"
              className="submit-button"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Donate Now
            </motion.button>
          </form>
        </motion.div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}