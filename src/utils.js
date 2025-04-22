// utils.js
export function currentAgeForBirthYear(birthYear) {
  const currentYear = new Date().getFullYear(); // Get the current year
  return currentYear - birthYear;
}
