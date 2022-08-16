import request from 'supertest';
import questionDal from '../dal/question.dal';
import app from '../server';

describe('question endpoint test', () => {
  it('should create a question', (done) => {
    request(app)
      .post('/question')
      .send({
        question: 'Do you accept changes easily?'
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201, done);
  });

  it('should update a question', (done) => {
    request(app)
      .put('/question/1')
      .send({
        question: 'How do you spend most of your time?'
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  it('should get a question by id', async () => {
    const response = await request(app).get('/question/1').set('Accept', 'application/json');

    expect(response.status).toEqual(200);
    expect(response.body.data.id).toEqual(1);
    expect(response.body.data.question).toEqual('How do you spend most of your time?');
  });

  it('should get all questions', async () => {
    const response = await request(app).get('/question').set('Accept', 'application/json');

    expect(response.status).toEqual(200);
    expect(response.body.data[0].id).toEqual(1);
    expect(response.body.data[0].question).toEqual('How do you spend most of your time?');
  });

  it('should delete a question', async () => {
    const response = await request(app).delete('/question/1').set('Accept', 'application/json');

    expect(response.status).toEqual(204);

    const questions = await questionDal.getAll();
    expect(questions.length).toEqual(0);
  });
});
