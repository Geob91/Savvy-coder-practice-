const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * TODO: Write a fxn. that grabs all of the odd elements in any ARRAY of NUMBERS.
 * HINT: An odd number, num, will RETURN TRUE when we test with: num % 2 === 1;
 */
// Nums the named parameter doesn't directly reference nums in the global scope
// => replaces function keyword, braces and return keyword (if it's 1 statement)

function filterOdds(nums) {
  return nums.filter(num => num % 2 === 1);
}

console.log(filterOdds(nums));

// TODO: Write a funtion that returns the sum of all the numbers in any ARRAY of NUMBERS.
function numberSummer(nums) {
  return nums.reduce((total, currentNum) => total + currentNum);
}

console.log(numberSummer(nums));

// TODO: MAP over nums and triple each number.

function timesThree(nums) {
  return nums.map(num => num * 3);
}

console.log(timesThree(nums));
