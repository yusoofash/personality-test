import choiceDal from '../dal/choice.dal';
import Choice from '../models/Choice';

const create = (payload: Choice) => choiceDal.create(payload);

const update = (id: number, payload: Partial<Choice>) => choiceDal.update(id, payload);

const getById = (id: number) => choiceDal.getById(id);

const deleteById = (id: number) => choiceDal.deleteById(id);

const getAll = () => choiceDal.getAll();

export default {
  create,
  update,
  getById,
  deleteById,
  getAll
};
