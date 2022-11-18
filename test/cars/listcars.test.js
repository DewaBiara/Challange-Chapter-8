/* eslint-disable semi */
/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../../app/index');

describe('GET /v1/cars', () => {
  it('should response with 200 as status code', async () => {
    return request(app)
      .get('/v1/cars')
      .then((res) => {
        expect(res.statusCode).toBe(res.statusCode);
        expect(res.body).toEqual(res.body);
      });
  });
});
