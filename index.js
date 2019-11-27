const fruits = [
  "apple",
  "kiwi",
  "pineapple",
  "jackfruit", // index is 3
  "dragonfruit",
  "pineapple",
  "mango",
  "guava", // index is 7
  "strawberry"
];

const spliceReturns = fruits.splice(3, 3, "raspberries");
console.log(fruits);
