const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function add1(n) {
  return n + 1;
}

function double(n) {
  return n * 2;
}

function add1AndDouble(n) {
  return double(add1(n));
}

function doubleAndAdd1(n) {
  return add1(double(n));
}
//
// //TODO:Add 1 and double each num inside of nums
// const numArray = nums.map(anyNameIwant => add1AndDouble(anyNameIwant));
// console.log(numArray);

// //TODO: add 1 and double each num inside of nums only using the first 2fxns
// console.log(nums.map(num => add1(num)).map(num => double(num)));

//TODO FILTER out all the odd numbers and then repeat

console.log(
  nums
    .filter(num => num % 2 === 0)
    .map(num => add1(num))
    .map(num => double(num))
);
