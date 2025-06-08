import React from 'react';
import { Link } from 'react-router-dom';

const CallNow = () => {
  return (
    <main className="section hero">
      <h2>Thank You for Reaching Out</h2>
      <p>Our service team has received your inquiry and will call you as soon as possible. For urgent questions, call us directly at <strong>(555) 123-4567</strong>.</p>
      <img src="/images/call-support.jpg" alt="Call Center" style={{ marginTop: '1em', width: '100%', maxWidth: '600px' }} />
      <Link to="/" className="btn" style={{ marginTop: '1em' }}>Return to Homepage</Link>
    </main>
  );
};

export default CallNow;
