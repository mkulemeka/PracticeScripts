// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
function timeToMixJuice(name) {
  let time = 0;
  switch (name) {
    case "Pure Strawberry Joy":
      time = 0.5;
      break;

    case "Energizer":
      time = 1.5;
      break;

    case "Green Garden":
      time = 1.5;
      break;

    case "Tropical Island":
      time = 3;
      break;

    case "All or Nothing":
      time = 5;
      break;

    default:
      time = 2.5;
  }
  return time;
  throw new Error("Please implement the timeToMixJuice function");
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
function limesToCut(wedgesNeeded, limes) {
  let wedges = 0;
  let counter = 0;
  if (wedgesNeeded === 0) return 0;
  while (wedges <= wedgesNeeded && counter < limes.length) {
    switch (limes[counter]) {
      case "small":
        wedges += 6;
        break;
      case "medium":
        wedges += 8;
        break;
      case "large":
        wedges += 10;
        break;
    }
    counter++;
  }
  return counter;
  throw new Error("Please implement the limesToCut function");
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
function remainingOrders(timeLeft, orders) {
  let totalPrepTime = 0;
  let counter = 0;
  while (totalPrepTime < timeLeft) {
    totalPrepTime += timeToMixJuice(orders[counter]);
    orders.shift();
  }
  return orders;
  throw new Error("Please implement the remainingOrders function");
}

const orders = [
    'Tropical Island',
    'Energizer',
    'Limetime',
    'All or Nothing',
    'Pure Strawberry Joy',
  ];
console.log(remainingOrders(7, orders));
