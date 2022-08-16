import { FindOptions } from 'sequelize/types';
import { Question } from '../models';

const create = async (payload: Question) => {
  const question = await Question.create(payload);
  return question;
};

const update = async (id: number, payload: Partial<Question>) => {
  const question = await Question.findByPk(id);
  if (!question) {
    throw new Error(`Question with id "${id}" not found`);
  }
  const updatedQuestion = await question.update(payload);
  return updatedQuestion;
};

const getById = async (id: number) => {
  const question = await Question.findByPk(id);
  if (!question) {
    throw new Error(`Question with id "${id}" not found`);
  }
  return question;
};

const deleteById = async (id: number) => {
  const deletedQuestionCount = await Question.destroy({
    where: { id }
  });
  return !!deletedQuestionCount;
};

const getAll = async (options?: FindOptions<Question>) => {
  const questions = await Question.findAll(options);
  return questions;
};

export default {
  create,
  update,
  getById,
  deleteById,
  getAll
};
