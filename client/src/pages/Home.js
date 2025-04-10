import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container" style={{ marginTop: '80px', textAlign: 'center' }}>
      <section style={{ marginBottom: '60px' }}>
        <h1 style={{ fontSize: '3em', fontWeight: '700', color: '#333', marginBottom: '20px' }}>
          Empowering Your Digital Transformation
        </h1>
        <p style={{ fontSize: '1.5em', color: '#555', lineHeight: '1.8' }}>
          Navigate the complexities of the modern technological landscape with confidence. We provide strategic IT consulting services tailored to drive innovation, optimize operations, and secure your digital future.
        </p>
        <Link to="/services" style={{ display: 'inline-block', marginTop: '30px', padding: '15px 30px', backgroundColor: '#007bff', color: '#fff', textDecoration: 'none', borderRadius: '5px', fontWeight: '600' }}>
          Explore Our Expertise
        </Link>
      </section>

      <section style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', marginBottom: '60px' }}>
        <div style={{ textAlign: 'left', maxWidth: '45%' }}>
          <h2 style={{ fontSize: '2.2em', color: '#333', marginBottom: '15px' }}>Strategic Insights, Tangible Results</h2>
          <p style={{ fontSize: '1.1em', color: '#555', lineHeight: '1.6' }}>
            We partner with ambitious organizations to understand their unique challenges and opportunities. Our seasoned consultants deliver actionable strategies and implement cutting-edge solutions that drive measurable business outcomes.
          </p>
        </div>
        <div style={{ maxWidth: '45%' }}>
          <img
            src="placeholder-strategy.jpg"
            alt="Strategic Planning"
            style={{ width: '100%', height: 'auto', maxWidth: 'none !important', minWidth: '0 !important', borderRadius: '5px' }}
          />
        </div>
      </section>

      <section style={{ backgroundColor: '#f8f8f8', padding: '60px 0', borderRadius: '8px' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.2em', color: '#333', marginBottom: '30px' }}>Featured Services</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
            <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '5px', textAlign: 'left' }}>
              <h3 style={{ color: '#007bff', marginBottom: '10px' }}>Digital Transformation</h3>
              <p style={{ fontSize: '1em', color: '#555', lineHeight: '1.5' }}>End-to-end guidance to modernize your technology infrastructure and processes for enhanced agility and efficiency.</p>
            </div>
            <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '5px', textAlign: 'left' }}>
              <h3 style={{ color: '#007bff', marginBottom: '10px' }}>Cloud Architecture & Migration</h3>
              <p style={{ fontSize: '1em', color: '#555', lineHeight: '1.5' }}>Expertise in designing, implementing, and migrating to scalable and secure cloud environments.</p>
            </div>
            <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '5px', textAlign: 'left' }}>
              <h3 style={{ color: '#007bff', marginBottom: '10px' }}>Cybersecurity Solutions</h3>
              <p style={{ fontSize: '1em', color: '#555', lineHeight: '1.5' }}>Comprehensive strategies and implementation to protect your digital assets from evolving threats.</p>
            </div>
            {/* Add more featured services */}
          </div>
          <Link to="/services" style={{ display: 'inline-block', marginTop: '40px', padding: '15px 30px', backgroundColor: '#555', color: '#fff', textDecoration: 'none', borderRadius: '5px', fontWeight: '600' }}>
            See All Services
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;