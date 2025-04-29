import React from 'react';
import './third.css'; // Import the CSS file for styling

const criteriaData = {
  title: 'K9 School Acceptance Criteria',
  description:
    'We are committed to providing a safe and positive environment for all dogs. Here are the requirements for acceptance into our programs:',
  points: [
    'Dogs must be in excellent overall health.',
    "Owners must submit up-to-date vaccination records and health certificates.",
    'Each dog must pass a temperament and behavior evaluation.',
  ],
  buttonText: 'Schedule an Assessment',
};

const Criteria = () => {
  return (
    <section className="criteria-section">
      <div className="criteria-image">
        <img
          src="/images/k9image2.jpg" // Replace with your image path
          alt="Decorative dog element"
        />
      </div>
      <div className="criteria-content">
        <h2 className="criteria-title">{criteriaData.title}</h2>
        <p className="criteria-description">{criteriaData.description}</p>
        <ul className="criteria-list">
          {criteriaData.points.map((point, index) => (
            <li key={index} className="criteria-item">
              &#10003; {point}
            </li>
          ))}
        </ul>
        <button className="criteria-button">{criteriaData.buttonText}</button>
      </div>
    </section>
  );
};

export default Criteria;