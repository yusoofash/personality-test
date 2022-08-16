import questionDal from '../dal/question.dal';
import Question from '../models/Question';

const create = (payload: Question) => questionDal.create(payload);

const update = (id: number, payload: Partial<Question>) => questionDal.update(id, payload);

const getById = (id: number) => questionDal.getById(id);

const deleteById = (id: number) => questionDal.deleteById(id);

const getAll = () => questionDal.getAll({ include: 'choices' });

export default {
  create,
  update,
  getById,
  deleteById,
  getAll
};
