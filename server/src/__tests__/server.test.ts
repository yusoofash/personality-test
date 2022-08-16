import request from 'supertest';
import app from '../server';

describe('server endpoint test', () => {
  it('Hello world API Request', (done) => {
    request(app).get('/').expect(200).expect('Hello world!', done);
  });
});
