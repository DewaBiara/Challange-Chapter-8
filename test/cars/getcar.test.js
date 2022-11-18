/* eslint-disable semi */
/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../../app/index');

describe('GET /v1/cars/:id', () => {
  it('should response with 200 as status code', async () => {
    const id = 1;

    return await request(app)
      .get('/v1/cars/' + id)
      .then((response) => {
        expect(response.statusCode).toBe(response.statusCode);
        expect(response.body).toEqual(response.body);
      });
  });
});
