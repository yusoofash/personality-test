import { PersonalityType } from './choice';

export type UserAnswer = {
  questionId: number;
  choiceId: number;
  personalityType: PersonalityType;
};
