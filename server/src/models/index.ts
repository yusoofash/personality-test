import Choice from './Choice';
import Question from './Question';

// relation
Question.hasMany(Choice, {
  sourceKey: 'id',
  foreignKey: 'questionId',
  as: 'choices'
});

export { Question, Choice };
