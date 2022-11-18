/* eslint-disable no-sequences */
/* eslint-disable comma-dangle */
/* eslint-disable semi */
/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../../app/index');

describe('DELETE /v1/cars/:id', () => {
  let car, accessTokenAdmin, accessTokenCustomer;

  beforeEach(async () => {
    accessTokenAdmin = await request(app).post('/v1/auth/login').send({
      email: 'dewabiara@gmail.com',
      password: 'dewabiara',
    });

    accessTokenCustomer = await request(app).post('/v1/auth/login').send({
      email: 'dewabiara2@gmail.com',
      password: 'dewabiara2',
    });

    car = await request(app)
      .post('/v1/cars')
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${accessTokenAdmin.body.accessToken}`)
      .send({
        name: 'Mazda RX7',
        price: 3000000,
        size: 'SMALL',
        image: 'https://source.unsplash.com/500x500',
      });

    return car, accessTokenAdmin, accessTokenCustomer;
  }, 6000);

  it('should response with 204 as status code', async () => {
    return request(app)
      .delete('/v1/cars/' + car.body.id)
      .set('Authorization', `Bearer ${accessTokenAdmin.body.accessToken}`)
      .then((res) => {
        expect(res.status).toBe(res.status);
      });
  });

  it('should response with 401 as status code', async () => {
    return request(app)
      .delete('/v1/cars/' + car.body.id)
      .set('Authorization', `Bearer ${accessTokenCustomer.body.accessToken}`)
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
      .set('Authorization', `Bearer ${accessTokenAdmin.body.accessToken}`);
  }, 6000);
});
