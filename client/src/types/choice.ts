export type PersonalityType = 'introvert' | 'extrovert' | 'ambivert';

export type Choice = {
  id: number;
  questionId: number;
  description: string;
  personalityType: PersonalityType;
};
