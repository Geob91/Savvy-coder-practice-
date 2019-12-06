const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const smallNumber = nums.reduce((total, currentNum) => total + currentNum);

console.log(smallNumber);
//TODO: Use reduce sum up these number

//TODO: write funciton that takes array of numbers and returns...the average

function getAvg(nums) {
  return nums.reduce((total, num) => total + num) / nums.length;
}

console.log(getAvg(nums));
