import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import { Question } from 'types/question';
import Quiz from './index';

const quizQuestions: Question[] = [
  {
    id: 1,
    question: 'Do you take risk?',
    choices: [
      {
        id: 1,
        description: 'I don"t take big risk',
        personalityType: 'introvert',
        questionId: 1
      },
      {
        id: 2,
        description: 'I take big risk',
        personalityType: 'extrovert',
        questionId: 1
      }
    ],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 2,
    question: 'You are at a coffee shop. The only available seat is in front of a stranger.',
    choices: [
      {
        id: 3,
        description: 'I’ll just subtly leave my cup on the table and abandon it, forever.',
        personalityType: 'introvert',
        questionId: 2
      },
      {
        id: 4,
        description: 'That’s okay, they seem interesting. I’ll ask them what they’re reading.',
        personalityType: 'extrovert',
        questionId: 2
      }
    ],
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

beforeEach(() => {
  jest
    .spyOn(global, 'fetch')
    .mockImplementation(
      jest.fn(() =>
        Promise.resolve({ json: () => Promise.resolve({ data: quizQuestions }) })
      ) as jest.Mock
    );
});

afterEach(() => {
  (global.fetch as jest.Mock).mockRestore();
});

test('renders the quiz page and show the UI elements', async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Quiz />
      </BrowserRouter>
    );
  });

  const heading = screen.getByText('Personality Test');
  expect(heading).toBeInTheDocument();

  const question = screen.getByText(quizQuestions[0].question);
  expect(question).toBeInTheDocument();

  const choice1 = screen.getByText(quizQuestions[0].choices[0].description);
  expect(choice1).toBeInTheDocument();
  const choice2 = screen.getByText(quizQuestions[0].choices[1].description);
  expect(choice2).toBeInTheDocument();

  const curQuestion = screen.getByText('1 of 2 Questions');
  expect(curQuestion).toBeInTheDocument();

  const nextButton = screen.getByText('Next', { selector: 'button' });
  expect(nextButton).toBeInTheDocument();
});

test('test the buttons and results page', async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Quiz />
      </BrowserRouter>
    );
  });

  let nextButton = screen.getByText('Next', { selector: 'button' });
  expect(nextButton).toBeDisabled();

  // select a choice
  const choice1a = screen.getByText(quizQuestions[0].choices[0].description);
  userEvent.click(choice1a);

  nextButton = screen.getByText('Next', { selector: 'button' });
  expect(nextButton).toBeEnabled();

  userEvent.click(nextButton);

  const question = screen.getByText(quizQuestions[1].question);
  expect(question).toBeInTheDocument();

  const choice2a = screen.getByText(quizQuestions[1].choices[0].description);
  userEvent.click(choice2a);

  const finishTestBtn = screen.getByText('Finish test', { selector: 'button' });
  expect(finishTestBtn).toBeEnabled();

  // finish the test
  userEvent.click(finishTestBtn);

  const heading = screen.getByText('Test Result', { selector: 'h1' });
  expect(heading).toBeInTheDocument();
  const subHeading = screen.getByText(/You are more of an/i, {
    selector: 'h4',
    exact: false
  });
  expect(subHeading.textContent).toEqual('You are more of an introvert');

  const retakeQuizBtn = screen.getByText('Retake test', { selector: 'button' });
  expect(retakeQuizBtn).toBeInTheDocument();
  const goHomeBtn = screen.getByText('Go home', { selector: 'button' });
  expect(goHomeBtn).toBeInTheDocument();
});
