import React from 'react';

function AboutUs() {
  return (
    <div className="container" style={{ marginTop: '80px' }}>
      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ fontSize: '2.5em', fontWeight: '700', color: '#333', marginBottom: '20px' }}>Our Expertise, Your Advantage</h2>
        <p style={{ fontSize: '1.2em', color: '#555', lineHeight: '1.8' }}>
          We are a collective of seasoned IT consultants, architects, and engineers with a shared passion for leveraging technology to solve complex business challenges. Our diverse backgrounds and deep industry knowledge enable us to provide insightful and effective solutions.
        </p>
      </section>

      <section style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', marginBottom: '60px' }}>
        <div style={{ maxWidth: '45%' }}>
          <img
            src="placeholder-team.jpg"
            alt="Our Team"
            style={{ width: '100%', height: 'auto', maxWidth: 'none !important', minWidth: '0 !important', borderRadius: '5px' }}
          />
        </div>
        <div style={{ textAlign: 'left', maxWidth: '45%' }}>
          <h3 style={{ fontSize: '2em', color: '#333', marginBottom: '15px' }}>Decades of Collective Experience</h3>
          <p style={{ fontSize: '1.1em', color: '#555', lineHeight: '1.6' }}>
            Our team brings together decades of experience across various sectors, including finance, healthcare, manufacturing, and technology. This broad perspective allows us to understand your specific industry needs and tailor our approach accordingly.
          </p>
          <h3 style={{ fontSize: '2em', color: '#333', marginBottom: '15px', marginTop: '30px' }}>Client-Centric Philosophy</h3>
          <p style={{ fontSize: '1.1em', color: '#555', lineHeight: '1.6' }}>
            We believe in building long-term partnerships based on trust, transparency, and a deep understanding of your business objectives. Your success is our ultimate goal.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: '#f8f8f8', padding: '60px 0', borderRadius: '8px' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.2em', color: '#333', marginBottom: '30px' }}>Our Core Values</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px' }}>
            <div style={{ padding: '20px', textAlign: 'center' }}>
              <h4 style={{ color: '#007bff', marginBottom: '10px' }}>Expertise</h4>
              <p style={{ fontSize: '1em', color: '#555' }}>Deep knowledge and continuous learning in the IT domain.</p>
            </div>
            <div style={{ padding: '20px', textAlign: 'center' }}>
              <h4 style={{ color: '#007bff', marginBottom: '10px' }}>Innovation</h4>
              <p style={{ fontSize: '1em', color: '#555' }}>Embracing new technologies and creative problem-solving.</p>
            </div>
            <div style={{ padding: '20px', textAlign: 'center' }}>
              <h4 style={{ color: '#007bff', marginBottom: '10px' }}>Integrity</h4>
              <p style={{ fontSize: '1em', color: '#555' }}>Honest and ethical practices in all our engagements.</p>
            </div>
            <div style={{ padding: '20px', textAlign: 'center' }}>
              <h4 style={{ color: '#007bff', marginBottom: '10px' }}>Collaboration</h4>
              <p style={{ fontSize: '1em', color: '#555' }}>Working closely with our clients to achieve shared success.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;