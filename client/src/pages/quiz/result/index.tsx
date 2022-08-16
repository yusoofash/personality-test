import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PersonalityType } from 'types/choice';
import './index.css';

type ResultProps = {
  personalityTypes: PersonalityType[];
  onRetake: () => void;
};

/**
 * using Boyer Moore majority voting algorithm, to find the majority personality
 */
export const getPersonalityType = (personalityTypes: PersonalityType[]): PersonalityType => {
  let personality: PersonalityType = 'introvert';

  let votes = 0;

  for (const personalityType of personalityTypes) {
    if (votes === 0) {
      personality = personalityType;
      votes = 1;
    } else if (personality === personalityType) {
      votes += 1;
    } else {
      votes -= 1;
    }
  }

  // Checking if majority candidate occurs more than n/2 times
  let count = 0;
  for (const personalityType of personalityTypes) {
    if (personalityType === personality) {
      count += 1;
    }
  }

  if (count > Math.floor(personalityTypes.length / 2)) {
    return personality;
  }

  return 'ambivert';
};

const getPersonalityDetails = (personalityType: PersonalityType) => {
  switch (personalityType) {
    case 'introvert':
      return {
        description:
          'You feel more comfortable focusing on inner thoughts and ideas, rather than what’s happening externally. You enjoy spending time with just one or two people, rather than large groups or crowds.',
        img: '/introvert.jpg'
      };
    case 'extrovert':
      return {
        description:
          'You have a personality type that is friendly, talkative and social. You prefer the company of others over spending time alone. You may be an extrovert if you love to talk to people and you thrive in social gatherings.',
        img: '/extrovert.jpg'
      };
    default:
      return {
        description:
          'You have a balance of extrovert and introvert features. According to studies, ambiverts engage in a pattern of talking and listening equally—since they share characteristics of those super outgoing and those more reserved.',
        img: '/ambivert.jpg'
      };
  }
};

const Result: React.FC<ResultProps> = (props) => {
  const { personalityTypes, onRetake } = props;
  const navigate = useNavigate();

  const personalityType = getPersonalityType(personalityTypes);
  const personalityDetails = getPersonalityDetails(personalityType);

  const goHome = () => {
    navigate('/');
  };

  return (
    <section className="container">
      <div className="mx-auto mb-4 result-box">
        <div className="row mb-3">
          <div className="col-md-8">
            <h1 className="mb-3 fw-bold">Test Result</h1>
            <h4 className="mb-4">
              You are more of an <strong className="text-success">{personalityType}</strong>
            </h4>
            <p className="result-description fs-5 mb-4">{personalityDetails.description}</p>
          </div>
          <div className="col-md-4">
            <img src={personalityDetails.img} alt={personalityType} className="img-fluid" />
          </div>
        </div>

        <button type="button" className="btn btn-success me-2" onClick={onRetake}>
          Retake test
        </button>
        <button type="button" className="btn btn-secondary" onClick={goHome}>
          Go home
        </button>
      </div>
    </section>
  );
};

export default Result;
