import { InferAttributes } from 'sequelize/types';
import sequelize from './config/db';
import { Choice, Question } from './models';
import app from './server';

const port = 8080;

// TODO: setup sequelize-cli and use migrations, seeders
const seedDB = async () => {
  const questions = [
    {
      question: 'You are at a coffee shop. The only available seat is in front of a stranger.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      question: 'Do you accept changes easily?',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      question: 'How many friends you have',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      question: 'How do you spend most of your time?',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      question: 'It’s Saturday night and raining. What are you thinking?',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ];

  await Question.bulkCreate(questions);

  const choices: InferAttributes<Omit<Choice, 'id'>>[] = [
    {
      questionId: 1,
      description: 'That’s okay, they seem interesting. I’ll ask them what they’re reading.',
      personalityType: 'extrovert',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      questionId: 1,
      description: 'I’ll just subtly leave my cup on the table and abandon it, forever.',
      personalityType: 'introvert',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      questionId: 2,
      description: 'Accept change easily',
      personalityType: 'extrovert',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      questionId: 2,
      description: 'Do not accept change easily',
      personalityType: 'introvert',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      questionId: 3,
      description: 'Many.',
      personalityType: 'extrovert',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      questionId: 3,
      description: 'Few.',
      personalityType: 'introvert',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      questionId: 4,
      description: 'Spend more time with family and friends.',
      personalityType: 'extrovert',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      questionId: 4,
      description: 'Spends more time with themselves',
      personalityType: 'introvert',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      questionId: 5,
      description: 'Let’s go out. Spending the night inside would be an outrage!',
      personalityType: 'extrovert',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      questionId: 5,
      description: 'Rain? What a perfect excuse to cancel all plans & drink tea at home!',
      personalityType: 'introvert',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ];

  await Choice.bulkCreate(choices);
};

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');

    await sequelize.sync({ force: true });
    await seedDB();
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`server listening on port ${port}`);
  });
}
