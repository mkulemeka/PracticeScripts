// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
function totalBirdCount(birdsPerDay) {
  let count = 0;
  for (let birds of birdsPerDay) {
    count += birds;
  }
  return count;
  throw new Error("Please implement the totalBirdCount function");
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
function birdsInWeek(birdsPerDay, week) {
  const copy = [];
  let count = 0;

  while (birdsPerDay.length) {
    copy.push(birdsPerDay.splice(0, 7));
  }

  for (let i = 0; i < copy.length; i++) {
    if (i === week - 1) {
      count += copy[i].reduce((a, b) => a + b);
    }
  }

  return count;

  throw new Error("Please implement the birdsInWeek function");
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {number[]} corrected bird count data
 */
function fixBirdCountLog(birdsPerDay) {
  for (let i = 0; i < birdsPerDay.length; i++) {
    if (i % 2 === 0) {
      birdsPerDay[i]++;
    }
  }
  return birdsPerDay;
  throw new Error("Please implement the fixBirdCountLog function");
}


