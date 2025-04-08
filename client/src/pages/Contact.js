import React from 'react';

function Contact() {
  return (
    <div>
      <h1>Contact Us</h1>
      <form>
        <label>Name:</label>
        <input type="text" name="name" required />
        <label>Email:</label>
        <input type="email" name="email" required />
        <label>Message:</label>
        <textarea name="message" required></textarea>
        <button type="submit">Submit</button>
      </form>
      <p>Email: contact@itconsultantservice.com</p>
      <p>Phone: +1-234-567-890</p>
    </div>
  );
}

export default Contact;
