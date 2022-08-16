import express from 'express';
import cors from 'cors';
import defaultErrorHandle from './middlewares/errorHandle.middleware';
import questionRouter from './routes/question.route';
import choiceRouter from './routes/choice.route';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get('/', (req, res) => res.send('Hello world!'));
app.use('/question', questionRouter);
app.use('/choice', choiceRouter);

app.use(defaultErrorHandle);

export default app;
