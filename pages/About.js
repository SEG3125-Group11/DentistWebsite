import React, { useState } from 'react';

const About = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! Thank you.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <main>
      {/* Origin Section - Green, image right */}
      <section className="section green-bg">
        <div className="section-content">
          <div className="text">
            <h2>About SmileBright Dental Clinic</h2>
            <p>
              Founded over a decade ago, SmileBright Dental Clinic has proudly served the Ottawa community 
              with top-quality dental care. Our clinic is built on compassion, innovation, and dedication to 
              patient well-being.
            </p>
          </div>
          <div className="image">
            <img
              src="/images/team-placeholder.jpg"
              alt="Our Dental Team"
            />
          </div>
        </div>
      </section>

      {/* Our Mission Section - White, text only */}
      <section className="section white-bg">
        <h3>Our Mission</h3>
        <p>
          We are committed to providing personalized, gentle care using the latest dental techniques 
          and technology. Our focus is not only on your smile but also on your experience — making 
          sure every visit is stress-free, informative, and effective.
        </p>
        <ul>
          <li>Preventive Care and Education</li>
          <li>Advanced Technology and Equipment</li>
          <li>Friendly and Professional Team</li>
          <li>Affordable and Transparent Pricing</li>
        </ul>
      </section>

      {/* Contact Form Section - Green, form left */}
      <section className="section green-bg">
        <div className="section-content reverse">
          <div className="text">
            <h3>Want to Know More?</h3>
            <p>
              If you'd like to speak with someone or schedule a visit to see our clinic, please reach out.
            </p>
            <form onSubmit={handleSubmit} className="contact-form">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
              />
              <button type="submit" className="btn">Send Message</button>
            </form>
          </div>
          <div className="image">
            <img
              src="/images/contact-placeholder.png"
              alt="Contact Us"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
