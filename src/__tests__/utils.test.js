// utils.test.js
import { currentAgeForBirthYear } from '../utils';  // Adjust the path as necessary

describe('currentAgeForBirthYear', () => {
  it('returns the age of a person based on the year of birth', () => {
    const birthYear = 1984;
    const ageOfPerson = currentAgeForBirthYear(birthYear);
    const currentYear = new Date().getFullYear();
    const expectedAge = currentYear - birthYear;
    expect(ageOfPerson).toBe(expectedAge);
  });
});
