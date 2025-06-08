import React from 'react';

const GeneralDentistry = () => {
  return (
    <main>
      {/* Intro Section */}
      <section className="section green-bg">
        <div className="section-content">
          <div className="text">
            <h2>What is General Dentistry?</h2>
            <p>
              General dentistry covers routine dental care such as cleanings, exams, and preventive treatments.
              These services help maintain your oral health and catch problems early before they become serious.
            </p>
          </div>
          <div className="image">
            <img src="/images/general-dentistry.jpg" alt="General Dentistry" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section white-bg">
        <div className="section-content">
          <div className="text">
            <h2>Common Services Offered</h2>
            <p>Our general dentistry services include:</p>
            <ul>
              <li>Dental cleanings and check-ups</li>
              <li>X-rays and diagnostic tests</li>
              <li>Cavity detection and fillings</li>
              <li>Gum disease prevention and treatment</li>
            </ul>
          </div>
          <div className="image">
            <img src="/images/services.jpg" alt="Dental Services" />
          </div>
        </div>
      </section>

      {/* Importance Section */}
      <section className="section green-bg">
        <div className="section-content">
          <div className="text">
            <h2>Why Regular Visits Matter</h2>
            <p>
              Regular dental visits help prevent cavities, gum disease, and other oral health problems.
              Early detection can save you from pain and costly procedures later.
            </p>
          </div>
          <div className="image">
            <img src="/images/prevention.jpg" alt="Preventive Care" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section white-bg">
        <div className="section-content">
          <div className="text">
            <h2>Schedule Your Check-up</h2>
            <p>
              Keep your smile healthy with regular dental care. Contact us today to book your cleaning or check-up.
            </p>
            <a href="/contact" className="btn">Book Now</a>
          </div>
          <div className="image">
            <img src="/images/appointment.png" alt="Book Appointment" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default GeneralDentistry;
