import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    preferredTime: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add further form submission logic here
    setSubmitted(true);
  };

  return (
    <main className="section contact-container">
      <h2>Contact & Booking</h2>
      <div className="contact-content">
        {/* Left side: Contact form */}
        <form onSubmit={handleSubmit} className="contact-form">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="preferredTime">Preferred Time:</label>
          <input
            type="text"
            id="preferredTime"
            name="preferredTime"
            value={formData.preferredTime}
            onChange={handleChange}
            required
          />

          <button type="submit" className="btn">Submit</button>

          {submitted && (
            <div className="confirmation">Thank you! We'll contact you shortly.</div>
          )}
        </form>

        {/* Right side: Map */}
        <div className="map-container">
          <iframe
            title="SmileBright Dental Clinic Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2796.3514892720887!2d-75.68661148444556!3d45.42152997910056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce050bcf1f1a81%3A0x2f3c37a1e5b07a94!2sParliament%20Hill!5e0!3m2!1sen!2sca!4v1688668395434!5m2!1sen!2sca"
            width="100%"
            height="350"
            style={{ border: 0, borderRadius: '8px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </main>
  );
};

export default Contact;
