const groceries = (arr) => {
  const copy = arr.map((grocery) => grocery.item);

  if (copy.length === 2) {
    return copy.join(" and ");
  } else if (copy.length > 2) {
    let firstCopy = [];
    let secondCopy = [];

    for (let i = 0; i < copy.length - 2; i++) {
      firstCopy.push(copy[i]);
    }

    for (let i = copy.length - 2; i < copy.length; i++) {
      secondCopy.push(copy[i]);
    }
    return firstCopy.concat(secondCopy.join(" and ")).join(", ");
  } else return copy.join(", ");
};

console.log(
  groceries([
    { item: "Carrots" },
    { item: "Hummus" },
    { item: "Pesto" },
    { item: "Rigatoni" },
    { item: "Bananas" }
  ])
);

console.log(groceries([{ item: "Bread" }, { item: "Butter" }]));

console.log(groceries([{ item: "Cheese Balls" }]));
// returns 'Cheese Balls'
