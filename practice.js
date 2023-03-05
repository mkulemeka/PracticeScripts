const test = [4, 5, 8, 0, 4, 6, 7];
console.log("test before: " + test);

let mapArr = test.map((element) => element + 2);
console.log("Mapped: " + mapArr);

test.forEach((element) => console.log(element - 1));
console.log("After forEach: " + test);

let filter = test.filter((element) => element > 5);
console.log("Filtered: " + filter);

const reverse = test.reverse();
console.log("Reverse: " + reverse);
