
const password = [];
//Create a function that takes in a sentence and returns the first letter of the sentence
function frontDoorResponse(lineFromPoem) {
  return lineFromPoem[0];
}

//function that accepts a string and returns a capitalized version
function frontDoorPassword(password) {
  const firstLetter = password.charAt(0).toUpperCase();
  const word = password.slice(1).toLowerCase();

  return firstLetter.concat(word);
}

//function to get the last letter of a string
function backDoorResponse(lineFromPoem) {
  let stringWithLastLetter = lineFromPoem.trim();
  return stringWithLastLetter[stringWithLastLetter.length - 1].trim();
}

//function accepts a string and returns a capitalized version with "please" concatinated
function backDoorPassword(password) {
  let politePhrase = frontDoorPassword(password).trim().concat(", please");
  return politePhrase;
}

console.log(backDoorPassword("line "));
