import { Choice } from './choice';

export type Question = {
  id: number;
  question: string;
  choices: Choice[];
  createdAt: Date;
  updatedAt: Date;
};
