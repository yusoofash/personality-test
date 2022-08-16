import { PersonalityType } from 'types/choice';
import { getPersonalityType } from '.';

test('should output introvert', () => {
  const personalityTypes: PersonalityType[] = ['introvert', 'introvert', 'extrovert'];
  const personalityType = getPersonalityType(personalityTypes);
  expect(personalityType).toEqual('introvert');
});

test('should output extrovert', () => {
  const personalityTypes: PersonalityType[] = ['extrovert', 'extrovert', 'introvert'];
  const personalityType = getPersonalityType(personalityTypes);
  expect(personalityType).toEqual('extrovert');
});

test('should output ambivert', () => {
  const personalityTypes: PersonalityType[] = ['extrovert', 'introvert', 'extrovert', 'introvert'];
  const personalityType = getPersonalityType(personalityTypes);
  expect(personalityType).toEqual('ambivert');
});
