/* eslint-disable comma-dangle */
/* eslint-disable no-undef */
/* eslint-disable semi */
const request = require('supertest');
const app = require('../../app/index');
const email = `member${Math.random().toString().substring(12)}@gmail.com`;

describe('POST /v1/auth/register', () => {
  it('should response with 201 as status code', async () => {
    const name = 'Hello';
    const password = '123';

    return request(app)
      .post('/v1/auth/register')
      .set('Content-Type', 'application/json')
      .send({ name, email, password })
      .then((res) => {
        expect(res.statusCode).toBe(201);
        expect(res.body).toEqual(
          expect.objectContaining({
            ...res.body,
          })
        );
      });
  });

  it('should response with 422 as status code', async () => {
    const name = 'Member';
    const password = '123';

    return request(app)
      .post('/v1/auth/register')
      .set('Content-Type', 'application/json')
      .send({ name, email, password })
      .then((res) => {
        expect(res.statusCode).toBe(res.statusCode);
        expect(res.body).toEqual(res.body);
      });
  });
});
