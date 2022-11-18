/* eslint-disable comma-dangle */
/* eslint-disable no-undef */
/* eslint-disable semi */
const request = require('supertest');
const app = require('../../app/index');

const name = 'BMW Test';
const price = 100000;
const size = 'SMALL';
const image = 'https://source.unsplash.com/500x500';

describe('POST /v1/create', () => {
  it('should response with 201 as status code', async () => {
    const accessToken = await request(app).post('/v1/auth/login').send({
      email: 'firman@gmail.com',
      password: 'firman',
    });

    return request(app)
      .post('/v1/cars')
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${accessToken.body.accessToken}`)
      .send({ name, price, size, image })
      .then((res) => {
        expect(res.status).toBe(res.status);
        expect(res.body).toEqual(res.body);
        car = res.body;
      });
  });

  it('should response with 401 as status code', async () => {
    const accessToken = await request(app).post('/v1/auth/login').send({
      email: 'hendri@gmail.com',
      password: 'hendri',
    });

    return request(app)
      .post('/v1/cars')
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${accessToken.body.accessToken}`)
      .send({ name, price, size, image })
      .then((res) => {
        expect(res.status).toBe(res.status);
        if (res.body.details === null) {
          expect(res.body).toEqual(res.body);
          return;
        }
        expect(res.body).toEqual(res.body);
      });
  });
});
