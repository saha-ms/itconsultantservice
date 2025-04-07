// inquiryController.js
const handleInquiry = (req, res) => {
    const { name, message } = req.body;
  
    if (!name || !message) {
      return res.status(400).json({ success: false, error: 'Name and message are required.' });
    }
  
    res.status(200).json({ success: true, message: 'Inquiry received successfully.' });
  };
  
  module.exports = { handleInquiry };
  