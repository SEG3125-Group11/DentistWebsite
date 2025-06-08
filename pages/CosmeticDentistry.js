import React from 'react';

const CosmeticDentistry = () => {
  return (
    <main>
      {/* Intro Section */}
      <section className="section white-bg">
        <div className="section-content">
          <div className="image">
            <img src="/images/cosmetic-dentistry.jpg" alt="Cosmetic Dentistry" />
          </div>
          <div className="text">
            <h2>What is Cosmetic Dentistry?</h2>
            <p>
              Cosmetic dentistry focuses on improving the appearance of your teeth, gums, and smile.
              Treatments are designed to enhance aesthetics while maintaining oral health.
            </p>
          </div>
        </div>
      </section>

      {/* Treatments Section */}
      <section className="section green-bg">
        <div className="section-content">
          <div className="text">
            <h2>Popular Cosmetic Treatments</h2>
            <ul>
              <li>Veneers to cover imperfections</li>
              <li>Crowns to restore damaged teeth</li>
              <li>Teeth whitening for a brighter smile</li>
              <li>Smile makeovers tailored to you</li>
            </ul>
          </div>
          <div className="image">
            <img src="/images/cosmetic-treatments.jpg" alt="Cosmetic Treatments" />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section white-bg">
        <div className="section-content">
          <div className="image">
            <img src="/images/general-dentistry.jpg" alt="Confident Smile" />
          </div>
          <div className="text">
            <h2>Benefits of Cosmetic Dentistry</h2>
            <p>
              A beautiful smile can boost your confidence, improve your social interactions,
              and even contribute to better oral hygiene habits.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section green-bg">
        <div className="section-content">
          <div className="text">
            <h2>Enhance Your Smile</h2>
            <p>
              Ready to transform your smile? Contact us for a consultation and discover your options.
            </p>
            <a href="/contact" className="btn">Get Started</a>
          </div>
          <div className="image">
            <img src="/images/Appointment.png" alt="Book Appointment" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default CosmeticDentistry;
