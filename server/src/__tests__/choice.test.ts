import request from 'supertest';
import choiceDal from '../dal/choice.dal';
import { Question } from '../models';
import app from '../server';

describe('choice endpoint test', () => {
  let questionId: number;

  beforeAll(async () => {
    const question = await Question.create({
      question: 'Do you accept changes easily?'
    });
    questionId = question.id;
  });

  it('should create a choice', (done) => {
    request(app)
      .post('/choice')
      .send({
        questionId,
        description: 'Accept change easily',
        personalityType: 'extrovert'
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201, done);
  });

  it('should update a question', (done) => {
    request(app)
      .put(`/choice/${questionId}`)
      .send({
        description: 'Do not accept change easily',
        personalityType: 'introvert'
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  it('should get a choice by id', async () => {
    const response = await request(app).get('/choice/1').set('Accept', 'application/json');

    expect(response.status).toEqual(200);
    expect(response.body.data.id).toEqual(1);
    expect(response.body.data.description).toEqual('Do not accept change easily');
    expect(response.body.data.personalityType).toEqual('introvert');
  });

  it('should get all choices', async () => {
    const response = await request(app).get('/choice').set('Accept', 'application/json');

    expect(response.status).toEqual(200);
    expect(response.body.data[0].id).toEqual(1);
    expect(response.body.data[0].description).toEqual('Do not accept change easily');
  });

  it('should delete a choice', async () => {
    const response = await request(app).delete('/choice/1').set('Accept', 'application/json');

    expect(response.status).toEqual(204);

    const choices = await choiceDal.getAll();
    expect(choices.length).toEqual(0);
  });
});
