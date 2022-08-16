import Spinner from 'components/Spinner';
import React from 'react';
import { Choice as ChoiceType, PersonalityType } from 'types/choice';
import { Question } from 'types/question';
import { UserAnswer } from 'types/userAnswer';
import Choice from './choice';
import './index.css';
import Result from './result';

const Quiz = () => {
  const [questions, setQuestions] = React.useState<Question[]>([]);
  const [questionIndex, setQuestionIndex] = React.useState(-1);
  const [isLoading, setLoading] = React.useState(true);
  const [userAnswers, setUserAnswers] = React.useState<UserAnswer[]>([]);
  const [showResult, setShowResult] = React.useState(false);

  const personalityTypes: PersonalityType[] = userAnswers.map((u) => u.personalityType);

  const fetchQuestions = async () => {
    try {
      setLoading(true);

      const res = await fetch('http://localhost:8080/question');
      const json = await res.json();
      const fetchedQuestions: Question[] = json.data;

      if (fetchedQuestions.length > 0) {
        setQuestionIndex(0);
        setUserAnswers(
          fetchedQuestions.map((q) => ({
            questionId: q.id,
            choiceId: -1,
            personalityType: 'introvert'
          }))
        );
        setQuestions(fetchedQuestions);
      }
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchQuestions();
  }, []);

  const onChoiceClick = (choice: ChoiceType) => {
    setUserAnswers((prevState) =>
      prevState.map((s) => {
        if (s.questionId === questions[questionIndex].id) {
          return {
            ...s,
            choiceId: choice.id,
            personalityType: choice.personalityType
          };
        }
        return s;
      })
    );
  };

  const onPrev = () => {
    setQuestionIndex((prevIndex) => prevIndex - 1);
  };

  const onNext = () => {
    if (questionIndex === questions.length - 1) {
      setShowResult(true);
      return;
    }

    setQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const resetQuiz = () => {
    setShowResult(false);
    setQuestionIndex(0);
    setUserAnswers(
      questions.map((q) => ({ questionId: q.id, choiceId: -1, personalityType: 'introvert' }))
    );
  };

  if (showResult) {
    return <Result personalityTypes={personalityTypes} onRetake={resetQuiz} />;
  }

  return (
    <section className="container mt-5">
      <div className="card text-bg-dark p-2">
        <div className="card-header p-3 fw-bold fs-5 text-warning">Personality Test</div>
        <div className="card-body">
          {isLoading && (
            <div className="text-center">
              <Spinner />
            </div>
          )}

          {!isLoading && questions.length === 0 && (
            <div className="alert alert-danger" role="alert">
              Sorry, no questions available at the moment!
            </div>
          )}

          {!isLoading && questions.length > 0 && (
            <div className="py-2">
              <div className="fw-bold mb-4 d-flex fs-5">
                <div>{questionIndex + 1}.&nbsp;</div>
                <div>{questions[questionIndex].question}</div>
              </div>
              {questions[questionIndex].choices.map((c, index) => (
                <Choice
                  key={c.id}
                  index={index}
                  text={c.description}
                  isSelected={c.id === userAnswers[questionIndex].choiceId}
                  onClick={() => onChoiceClick(c)}
                />
              ))}
            </div>
          )}
        </div>

        <div className="card-footer d-flex flex-row justify-content-between align-items-center pb-2">
          <div>
            {questionIndex + 1} of {questions.length} Questions
          </div>
          {questions.length > 0 && (
            <div className="text-end">
              {questionIndex !== 0 && (
                <button
                  type="button"
                  className="btn btn-secondary mb-2"
                  style={{ width: 120 }}
                  onClick={onPrev}>
                  Previous
                </button>
              )}
              <button
                type="button"
                className="btn btn-success mb-2 ms-2"
                style={{ width: 120 }}
                onClick={onNext}
                disabled={userAnswers[questionIndex].choiceId === -1}>
                {questionIndex === questions.length - 1 ? 'Finish test' : 'Next'}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Quiz;
