import request from 'supertest';
import app from './app';

describe('API', () => {
  describe('GET /things', () => {
    it('should return 200 on success', (done) => {
      request(app)
        .get('/things')
        .expect(200)
        .end((err) => done(err));
    });
  });

  describe('POST /things', () => {
    it('should return 201 on success', (done) => {
      request(app)
        .post('/things')
        .send({ name: 'Thing 2' })
        .expect(201)
        .end((err) => done(err));
    });

    it('should return 400 on validation failure', (done) => {
      request(app)
        .post('/things')
        .send({ foo: 'bar' })
        .expect(400)
        .end((err) => done(err));
    });
  });

  describe('GET /foo', () => {
    it('should return 404', (done) => {
      request(app)
        .get('/foo')
        .expect(404)
        .end((err) => done(err));
    });
  });
});
