const { handleInquiry } = require('../../src/controllers/inquiryController');
const httpMocks = require('node-mocks-http');

describe('Inquiry Controller', () => {
  test('should return 200 when name and message are provided', () => {
    const req = httpMocks.createRequest({
      method: 'POST',
      body: { name: 'John Doe', message: 'Hello!' },
    });
    const res = httpMocks.createResponse();

    handleInquiry(req, res);

    expect(res.statusCode).toBe(200);
    expect(res._getJSONData()).toEqual({ success: true, message: 'Inquiry received successfully.' });
  });

  test('should return 400 when name or message is missing', () => {
    const req = httpMocks.createRequest({
      method: 'POST',
      body: { name: 'John Doe' }, // Missing 'message'
    });
    const res = httpMocks.createResponse();

    handleInquiry(req, res);

    expect(res.statusCode).toBe(400);
    expect(res._getJSONData()).toEqual({ success: false, error: 'Name and message are required.' });
  });
});
