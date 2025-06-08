import React from 'react';

const DentalImplants = () => {
  return (
    <main>
      {/* Intro Section */}
      <section className="section green-bg">
        <div className="section-content">
          <div className="text">
            <h2>What Are Dental Implants?</h2>
            <p>
              Dental implants are titanium posts surgically placed into your jawbone to replace missing tooth roots.
              They provide a strong foundation for replacement teeth that look and function like natural teeth.
            </p>
          </div>
          <div className="image">
            <img src="/images/dental-implants.jpg" alt="Dental Implants" />
          </div>
        </div>
      </section>

      {/* Procedure Section */}
      <section className="section white-bg">
        <div className="section-content">
          <div className="image">
            <img src="/images/implant-procedure.jpg" alt="Dental Implant Procedure" />
          </div>
          <div className="text">
            <h2>Implant Procedure</h2>
            <p>
              The implant procedure involves placing the post in the jawbone, allowing it to fuse over several months.
              Once healed, an artificial tooth (crown) is attached to the implant.
            </p>
            <p>
              The process is typically done under local anesthesia and is minimally invasive.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section green-bg">
        <div className="section-content">
          <div className="text">
            <h2>Benefits of Dental Implants</h2>
            <ul>
              <li>Restore natural appearance and function</li>
              <li>Prevent bone loss in the jaw</li>
              <li>Long-lasting and durable solution</li>
              <li>Improves speech and chewing ability</li>
            </ul>
          </div>
          <div className="image">
            <img src="/images/implant-benefits.jpg" alt="Dental Implant Benefits" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section white-bg">
        <div className="section-content">
          <div className="image">
            <img src="/images/Appointment.png" alt="Book Appointment" />
          </div>
          <div className="text">
            <h2>Interested in Dental Implants?</h2>
            <p>
              Contact us to schedule a consultation and find out if dental implants are right for you.
            </p>
            <a href="/contact" className="btn">Contact Us</a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DentalImplants;
