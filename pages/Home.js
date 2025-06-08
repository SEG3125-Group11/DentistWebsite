import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main>
      {/* Hero Section - Green with image right */}
      <section className="section green-bg">
        <div className="section-content">
          <div className="text">
            <h2>Welcome to SmileBright Dental</h2>
            <p>Expert dental care with a smile. Your health is our priority.</p>
            <Link to="/services" className="btn">Explore Services</Link>
          </div>
          <div className="image">
            <img
              src="/images/dental-chair.jpg"
              alt="Dental Chair"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - White, text only */}
      <section className="section white-bg">
        <h2>Why Choose Us?</h2>
        <p>
          At SmileBright Dental Clinic, we combine compassionate care with the latest dental
          technology to ensure that your experience is both comfortable and effective.
        </p>
        <ul>
          <li>Experienced and friendly staff</li>
          <li>Modern equipment and procedures</li>
          <li>Flexible appointment scheduling</li>
          <li>Focus on patient education and comfort</li>
        </ul>
      </section>

      {/* Booking CTA Section - Green with image left */}
      <section className="section green-bg">
        <div className="section-content reverse">
          <div className="image">
            <img
              src="/images/Appointment.png"
              alt="Booking Appointment"
            />
          </div>
          <div className="text">
            <h2>Book Your Appointment</h2>
            <p>Take the first step toward a healthier smile. Book a consultation with one of our dental professionals today.</p>
            <Link to="/contact" className="btn">Book Now</Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
