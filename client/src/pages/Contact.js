import React from 'react';

function Contact() {
  return (
    <div className="container" style={{ marginTop: '80px' }}>
      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ fontSize: '2.5em', fontWeight: '700', color: '#333', marginBottom: '20px' }}>Let's Discuss Your IT Needs</h2>
        <p style={{ fontSize: '1.2em', color: '#555', lineHeight: '1.8' }}>
          We're ready to help you take your technology to the next level. Reach out to our team of experts for a consultation.
        </p>
      </section>

      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '30px' }}>
        <div>
          <h3 style={{ fontSize: '2em', color: '#007bff', marginBottom: '15px' }}>Get in Touch</h3>
          <p style={{ fontSize: '1.1em', color: '#555', lineHeight: '1.6' }}>
            We value your inquiries and aim to respond promptly. Please use the contact form below or reach out via the provided contact information.
          </p>
          <div style={{ marginTop: '20px' }}>
            <p style={{ marginBottom: '10px' }}><strong>Address:</strong> 123 Innovation Drive, Tech City, CA 91234</p>
            <p style={{ marginBottom: '10px' }}><strong>Phone:</strong> (555) 123-4567</p>
            <p style={{ marginBottom: '10px' }}><strong>Email:</strong> info@youritconsultingservice.com</p>
          </div>
        </div>
        <div>
          <h3 style={{ fontSize: '2em', color: '#007bff', marginBottom: '15px' }}>Contact Form</h3>
          <form>
            <div style={{ marginBottom: '15px' }}>
              <label htmlFor="name" style={{ display: 'block', marginBottom: '5px', fontWeight: '600', color: '#333' }}>Name:</label>
              <input type="text" id="name" name="name" style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }} />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label htmlFor="email" style={{ display: 'block', marginBottom: '5px', fontWeight: '600', color: '#333' }}>Email:</label>
              <input type="email" id="email" name="email" style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }} />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label htmlFor="message" style={{ display: 'block', marginBottom: '5px', fontWeight: '600', color: '#333' }}>Message:</label>
              <textarea id="message" name="message" rows="5" style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }}></textarea>
            </div>
            <button type="submit" style={{ padding: '12px 25px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', fontWeight: '600', cursor: 'pointer' }}>
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;