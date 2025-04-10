import React from 'react';

function Services() {
  return (
    <div className="container" style={{ marginTop: '80px' }}>
      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ fontSize: '2.5em', fontWeight: '700', color: '#333', marginBottom: '20px' }}>Comprehensive IT Consulting Solutions</h2>
        <p style={{ fontSize: '1.2em', color: '#555', lineHeight: '1.8' }}>
          We offer a wide spectrum of IT consulting services designed to address the evolving needs of modern businesses. Our expertise spans strategy, implementation, and ongoing support.
        </p>
      </section>

      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>
        <div>
          <h3 style={{ fontSize: '2em', color: '#007bff', marginBottom: '15px' }}>IT Strategy & Planning</h3>
          <p style={{ fontSize: '1.1em', color: '#555', lineHeight: '1.6' }}>
            Develop a robust IT roadmap aligned with your business goals. Our strategic consulting helps you identify opportunities, optimize investments, and mitigate risks.
          </p>
          <ul>
            <li>Technology Assessment & Audit</li>
            <li>IT Governance & Compliance</li>
            <li>Digital Transformation Strategy</li>
            <li>Enterprise Architecture Planning</li>
          </ul>
        </div>
        <div>
          <h3 style={{ fontSize: '2em', color: '#007bff', marginBottom: '15px' }}>Cloud Services</h3>
          <p style={{ fontSize: '1.1em', color: '#555', lineHeight: '1.6' }}>
            Leverage the power of the cloud for scalability, agility, and cost-efficiency. We provide end-to-end cloud solutions tailored to your specific requirements.
          </p>
          <ul>
            <li>Cloud Architecture Design</li>
            <li>Cloud Migration & Implementation</li>
            <li>Cloud Security & Compliance</li>
            <li>Managed Cloud Services</li>
          </ul>
        </div>
        <div>
          <h3 style={{ fontSize: '2em', color: '#007bff', marginBottom: '15px' }}>Cybersecurity</h3>
          <p style={{ fontSize: '1.1em', color: '#555', lineHeight: '1.6' }}>
            Protect your critical data and infrastructure from ever-increasing cyber threats. Our comprehensive cybersecurity services ensure a resilient security posture.
          </p>
          <ul>
            <li>Risk Assessment & Management</li>
            <li>Threat Detection & Prevention</li>
            <li>Data Security & Privacy</li>
            <li>Security Awareness Training</li>
          </ul>
        </div>
        <div>
          <h3 style={{ fontSize: '2em', color: '#007bff', marginBottom: '15px' }}>Software Development & Integration</h3>
          <p style={{ fontSize: '1.1em', color: '#555', lineHeight: '1.6' }}>
            Build custom software solutions and seamlessly integrate disparate systems to enhance productivity and innovation.
          </p>
          <ul>
            <li>Custom Application Development</li>
            <li>API Design & Integration</li>
            <li>Enterprise System Integration</li>
            <li>Mobile Application Development</li>
          </ul>
        </div>
        <div>
          <h3 style={{ fontSize: '2em', color: '#007bff', marginBottom: '15px' }}>Data Analytics & Business Intelligence</h3>
          <p style={{ fontSize: '1.1em', color: '#555', lineHeight: '1.6' }}>
            Unlock the power of your data to gain valuable insights, make informed decisions, and drive business growth.
          </p>
          <ul>
            <li>Data Strategy & Governance</li>
            <li>Data Warehousing & ETL</li>
            <li>Business Intelligence Dashboards</li>
            <li>Predictive Analytics & Machine Learning</li>
          </ul>
        </div>
        <div>
          <h3 style={{ fontSize: '2em', color: '#007bff', marginBottom: '15px' }}>IT Infrastructure & Support</h3>
          <p style={{ fontSize: '1.1em', color: '#555', lineHeight: '1.6' }}>
            Ensure a reliable and high-performing IT infrastructure with our expert support and management services.
          </p>
          <ul>
            <li>Network Design & Implementation</li>
            <li>Server Management & Maintenance</li>
            <li>IT Helpdesk & Support</li>
            <li>Disaster Recovery & Business Continuity</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Services;