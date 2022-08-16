import { Choice } from '../models';

const create = async (payload: Choice) => {
  const choice = await Choice.create(payload);
  return choice;
};

const update = async (id: number, payload: Partial<Choice>) => {
  const choice = await Choice.findByPk(id);
  if (!choice) {
    throw new Error(`Choice with id "${id}" not found`);
  }
  const updatedChoice = await choice.update(payload);
  return updatedChoice;
};

const getById = async (id: number) => {
  const choice = await Choice.findByPk(id);
  if (!choice) {
    throw new Error(`Choice with id "${id}" not found`);
  }
  return choice;
};

const deleteById = async (id: number) => {
  const deletedChoiceCount = await Choice.destroy({
    where: { id }
  });
  return !!deletedChoiceCount;
};

const getAll = async () => {
  const choices = await Choice.findAll();
  return choices;
};

export default {
  create,
  update,
  getById,
  deleteById,
  getAll
};
