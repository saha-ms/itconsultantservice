const request = require('supertest');
const app = require('../../src/app'); // Adjust the path to your app file

describe('Inquiry Routes', () => {
  test('POST /api/inquiry should return 200 if name and message are provided', async () => {
    const response = await request(app).post('/api/inquiry').send({
      name: 'John Doe',
      message: 'Hello!',
    });

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ success: true, message: 'Inquiry received successfully.' });
  });
});
