import React from 'react';

const TeethWhitening = () => {
  return (
    <main>
      {/* Intro Section */}
      <section className="section white-bg">
        <div className="section-content">
          <div className="image">
            <img src="/images/teeth-whitening.jpg" alt="Teeth Whitening" />
          </div>
          <div className="text">
            <h2>Professional Teeth Whitening</h2>
            <p>
              Our safe and effective whitening treatments brighten your smile by several shades,
              removing stains caused by food, drinks, and aging.
            </p>
          </div>
        </div>
      </section>

      {/* Procedure Section */}
      <section className="section green-bg">
        <div className="section-content">
          <div className="text">
            <h2>What to Expect</h2>
            <p>
              Treatments typically take about an hour and involve applying a professional whitening gel,
              sometimes enhanced with a special light to speed up the process.
            </p>
            <p>
              Most patients experience minimal sensitivity during or after the procedure.
            </p>
          </div>
          <div className="image">
            <img src="/images/whitening-procedure.jpg" alt="Teeth Whitening Procedure" />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section white-bg">
        <div className="section-content">
          <div className="image">
            <img src="/images/general-dentistry.jpg" alt="Bright Smile" />
          </div>
          <div className="text">
            <h2>Benefits of Whitening</h2>
            <ul>
              <li>Enhances your appearance</li>
              <li>Boosts confidence</li>
              <li>Quick and painless</li>
              <li>Long-lasting results with proper care</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section green-bg">
        <div className="section-content">
          <div className="text">
            <h2>Schedule Your Whitening</h2>
            <p>
              Ready for a brighter smile? Book your teeth whitening appointment with us today.
            </p>
            <a href="/contact" className="btn">Book Now</a>
          </div>
          <div className="image">
            <img src="/images/Appointment.png" alt="Book Appointment" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default TeethWhitening;
