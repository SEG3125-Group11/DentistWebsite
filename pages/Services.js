import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <main>
      {/* General Dentistry */}
      <section className="section green-bg">
        <h2>General Dentistry</h2>
        <p>Cleanings, check-ups, and preventive care to maintain your overall oral health.</p>
        <Link to="/services/GeneralDentistry" className="btn">Learn More</Link>
      </section>

      {/* Cosmetic Dentistry */}
      <section className="section white-bg">
        <h2>Cosmetic Dentistry</h2>
        <p>Veneers, crowns, and smile design to help you achieve the smile you've always wanted.</p>
        <Link to="/services/CosmeticDentistry" className="btn">Learn More</Link>
      </section>

      {/* Root Canal */}
      <section className="section green-bg">
        <h2>Root Canal Treatment</h2>
        <p>Tooth-saving procedures designed to remove infection and preserve your natural teeth.</p>
        <Link to="/services/RootCanal" className="btn">Learn More</Link>
      </section>

      {/* Teeth Whitening */}
      <section className="section white-bg">
        <h2>Teeth Whitening</h2>
        <p>Professional and safe whitening treatments that bring back your bright smile.</p>
        <Link to="/services/TeethWhitening" className="btn">Learn More</Link>
      </section>

      {/* Dental Implants */}
      <section className="section green-bg">
        <h2>Dental Implants</h2>
        <p>Long-term solutions for missing teeth, restoring both form and function.</p>
        <Link to="/services/DentalImplants" className="btn">Learn More</Link>
      </section>
    </main>
  );
};

export default Services;
