import React, { useState } from 'react';

function FAQs() {
  const [expanded, setExpanded] = useState(null);

  const faqs = [
    {
      question: 'What types of IT consulting services do you offer?',
      answer: 'We offer a comprehensive range of IT consulting services, including IT strategy and planning, cloud services (architecture, migration, management), cybersecurity solutions, software development and integration, data analytics and business intelligence, and IT infrastructure and support.',
    },
    {
      question: 'What industries do you typically work with?',
      answer: 'Our team has experience across various industries, including finance, healthcare, manufacturing, technology, retail, and more. We tailor our approach to meet the specific needs of each sector.',
    },
    {
      question: 'What is your pricing model?',
      answer: 'Our pricing varies depending on the specific services required, the scope of the project, and the duration of the engagement. We offer flexible models, including hourly rates, project-based fees, and retainer agreements. We\'ll provide a detailed proposal after understanding your needs.',
    },
    {
      question: 'How do we get started with your consulting services?',
      answer: 'The first step is to contact us through our website or by phone. We\'ll schedule a consultation to discuss your challenges and objectives. Based on that discussion, we\'ll outline a proposed approach and a detailed plan.',
    },
    {
      question: 'What is your approach to client relationships?',
      answer: 'We believe in building long-term partnerships based on trust, transparency, and collaboration. We work closely with our clients to understand their unique needs and ensure our solutions are aligned with their business goals.',
    },
    {
      question: 'Do you offer ongoing support after project completion?',
      answer: 'Yes, we offer various levels of ongoing support and maintenance packages to ensure the continued success of the solutions we implement. We can tailor a support plan to meet your specific requirements.',
    },
    {
      question: 'What is your team\'s expertise and experience?',
      answer: 'Our team comprises seasoned IT consultants, architects, and engineers with decades of collective experience across diverse technologies and industries. We prioritize continuous learning and staying at the forefront of technological advancements.',
    },
    {
      question: 'How do you ensure the security of our data and systems?',
      answer: 'Security is a paramount concern for us. We implement robust security measures, including encryption, access controls, threat detection, and adherence to industry best practices and compliance standards, to protect your sensitive information.',
    },
    {
      question: 'Can you help us with cloud migration and strategy?',
      answer: 'Absolutely. Our cloud services team specializes in designing, implementing, and managing cloud solutions. We can guide you through the entire migration process, optimize your cloud architecture, and ensure security and cost-efficiency.',
    },
    {
      question: 'Do you provide custom software development services?',
      answer: 'Yes, we have a skilled software development team that can build custom applications tailored to your specific business requirements. We follow agile methodologies to ensure timely delivery and high-quality solutions.',
    },
    {
      question: 'How do you measure the success of your consulting engagements?',
      answer: 'We define success based on your specific business objectives and key performance indicators (KPIs). We work with you to establish measurable goals at the outset and track progress throughout the engagement to ensure we are delivering tangible results.',
    },
    {
      question: 'What is your response time for support requests?',
      answer: 'Our support response times vary depending on the severity of the issue and your service level agreement. We strive to respond promptly to all requests and have systems in place to address critical issues with urgency.',
    },
  ];

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div className="container" style={{ marginTop: '80px' }}>
      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ fontSize: '2.5em', fontWeight: '700', color: '#333', marginBottom: '20px' }}>Frequently Asked Questions</h2>
        <p style={{ fontSize: '1.2em', color: '#555', lineHeight: '1.8' }}>
          Find answers to common questions about our IT consulting services.
        </p>
      </section>

      <div>
        {faqs.map((faq, index) => (
          <div key={index} style={{ marginBottom: '20px', border: '1px solid #ddd', borderRadius: '5px', overflow: 'hidden' }}>
            <div
              style={{ backgroundColor: '#f8f8f8', padding: '15px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
              onClick={() => toggleExpand(index)}
            >
              <h4 style={{ color: '#333', marginBottom: '0' }}>{faq.question}</h4>
              <span style={{ fontSize: '1.5em', color: '#555' }}>{expanded === index ? '-' : '+'}</span>
            </div>
            {expanded === index && (
              <div style={{ padding: '15px', backgroundColor: '#fff' }}>
                <p style={{ color: '#555', lineHeight: '1.6' }}>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQs;