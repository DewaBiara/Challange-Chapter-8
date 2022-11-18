/* eslint-disable comma-dangle */
/* eslint-disable no-undef */
/* eslint-disable semi */
const request = require('supertest');
const app = require('../../app/index');

describe('GET /v1/auth/whoami', () => {
  it('should response with 200 as status code', async () => {
    const accessToken = await request(app).post('/v1/auth/login').send({
      email: 'firman@gmail.com',
      password: 'firman',
    });

    return request(app)
      .get('/v1/auth/whoami')
      .set('Authorization', `Bearer ${accessToken.body.accessToken}`)
      .then((res) => {
        expect(res.statusCode).toBe(res.statusCode);
        expect(res.body).toEqual(res.body);
      });
  });

  it('should response with 401 as status code', async () => {
    return request(app)
      .get('/v1/auth/whoami')
      .set('Authorization', `Bearer ${'invalidtoken'}`)
      .then((res) => {
        expect(res.statusCode).toBe(res.statusCode);
        expect(res.body).toEqual(res.body);
      });
  });
});
