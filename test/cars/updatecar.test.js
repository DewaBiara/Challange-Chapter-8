/* eslint-disable no-sequences */
/* eslint-disable comma-dangle */
/* eslint-disable no-undef */
/* eslint-disable semi */
const request = require('supertest');
const app = require('../../app/index');

describe('PUT /v1/cars/:id', () => {
  let car, accessTokenAdmin, accessTokenCustomer;

  const name = 'Ferrari Update';
  const price = 100000;
  const size = 'SMALL';
  const image = 'https://source.unsplash.com/500x500';

  beforeEach(async () => {
    accessTokenAdmin = await request(app).post('/v1/auth/login').send({
      email: 'firman@gmail.com',
      password: 'firman',
    });
    accessTokenCustomer = await request(app).post('/v1/auth/login').send({
      email: 'hendri@gmail.com',
      password: 'hendri',
    });

    car = await request(app)
      .post('/v1/cars')
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${accessTokenAdmin.body.accessToken}`)
      .send({
        name,
        price,
        size,
        image,
      });

    return car, accessTokenAdmin, accessTokenCustomer;
  }, 6000);

  it('should response with 200 as status code', async () => {
    return request(app)
      .put('/v1/cars/' + car.body.id)
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${accessTokenAdmin.body.accessToken}`)
      .send({ name, price, size, image })
      .then((res) => {
        expect(res.status).toBe(res.status);
        expect(res.body).toEqual(res.body);
      });
  });

  it('should response with 401 as status code', async () => {
    return request(app)
      .put('/v1/cars/' + car.body.id)
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${accessTokenCustomer.body.accessToken}`)
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

  afterEach(async () => {
    return request(app)
      .delete('/v1/cars/' + car.body.id)
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${accessTokenAdmin.body.accessToken}`);
  }, 6000);
});
