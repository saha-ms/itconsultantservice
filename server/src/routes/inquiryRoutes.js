const express = require('express');
const { handleInquiry } = require('../controllers/inquiryController');
const router = express.Router();

router.post('/inquiry', handleInquiry);

module.exports = router;
