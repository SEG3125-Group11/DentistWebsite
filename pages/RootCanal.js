import React from 'react';

const RootCanal = () => {
  return (
    <main>
      {/* Intro Section */}
      <section className="section green-bg">
        <div className="section-content">
          <div className="text">
            <h2>What is a Root Canal?</h2>
            <p>
              A root canal is a dental procedure used to treat infections in the soft core (pulp) of a tooth.
              If left untreated, these infections can cause severe pain, swelling, and even lead to tooth loss.
              The goal of a root canal is to save the natural tooth and eliminate the need for extraction.
            </p>
          </div>
          <div className="image">
            <img src="/images/root-canal.jpg" alt="Root Canal" />
          </div>
        </div>
      </section>

      {/* Procedure Section */}
      <section className="section white-bg">
        <div className="section-content">
          <div className="text">
            <h2>What to Expect During the Procedure</h2>
            <p>
              The dentist removes the infected pulp tissue, cleans and disinfects the root canals,
              and seals the tooth to prevent further infection. A crown is usually placed afterward
              to protect the tooth and restore full function.
            </p>
            <p>
              The procedure typically takes one or two appointments and is performed under local anesthesia.
            </p>
          </div>
          <div className="image">
            <img src="/images/procedure.jpg" alt="Root Canal Procedure" />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section green-bg">
        <div className="section-content">
          <div className="text">
            <h2>Benefits of Root Canal Treatment</h2>
            <ul>
              <li>Relieves pain caused by inflammation and infection</li>
              <li>Preserves your natural tooth and appearance</li>
              <li>Prevents the spread of infection to other areas</li>
              <li>Restores normal biting and chewing forces</li>
            </ul>
          </div>
          <div className="image">
            <img src="/images/benefits.png" alt="Root Canal Benefits" />
          </div>
        </div>
      </section>

      {/* Cost Section */}
      <section className="section white-bg">
        <div className="section-content">
          <div className="text">
            <h2>Cost Estimate</h2>
            <p>
              Typical cost: $700 – $1,200, depending on severity and insurance coverage.
            </p>
            <p>
              Our team can provide a personalized estimate during your consultation.
            </p>
          </div>
         
        </div>
      </section>

      {/* CTA Section */}
      <section className="section green-bg">
        <div className="section-content">
          <div className="text">
            <h2>Book a Consultation</h2>
            <p>
              Don’t wait for the pain to get worse. Schedule your root canal evaluation today and
              take the first step toward saving your natural smile.
            </p>
            <a href="/contact" className="btn">Schedule Now</a>
          </div>
          <div className="image">
            <img src="/images/Appointment.png" alt="Book Appointment" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default RootCanal;
